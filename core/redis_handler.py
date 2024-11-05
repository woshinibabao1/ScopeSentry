# -*- coding:utf-8 -*-　　
# @name: redis_handler
# @auth: rainy-autumn@outlook.com
# @version:
import asyncio
import json
import sys
from urllib.parse import quote_plus
import redis.asyncio as redis

from api.task.handler import get_task_data
from core.db import *
from core.util import *
import socket
from motor.motor_asyncio import AsyncIOMotorCursor


async def get_redis_pool():
    keep_alive_config = {}
    if sys.platform == 'darwin':  # macOS 平台
        keep_alive_config = {
            'socket_keepalive': True,
            'socket_keepalive_options': {
                socket.TCP_KEEPALIVE: 60,
                socket.TCP_KEEPCNT: 10,
                socket.TCP_KEEPINTVL: 10,
            }
        }
    else:
        keep_alive_config = {
            'socket_keepalive': True,
            'socket_keepalive_options': {
                socket.TCP_KEEPIDLE: 60,
                socket.TCP_KEEPCNT: 10,
                socket.TCP_KEEPINTVL: 10,
            }
        }
    redis_con = await redis.from_url(f"redis://:{quote_plus(REDIS_PASSWORD)}@{REDIS_IP}:{REDIS_PORT}", encoding="utf-8",
                                     decode_responses=True, **keep_alive_config)
    try:
        yield redis_con
    finally:
        await redis_con.close()
        await redis_con.connection_pool.disconnect()


async def refresh_config(name, t, content=None):
    data = {
        "name": name,
        "type": t,
    }
    if content is not None:
        data['content'] = content
    async for redis_client in get_redis_pool():
        name_all = []
        if name == "all":
            keys = await redis_client.keys("node:*")
            for key in keys:
                tmp_name = key.split(":")[1]
                hash_data = await redis_client.hgetall(key)
                if hash_data.get('state') != '3':
                    name_all.append(tmp_name)
        else:
            name_all.append(name)
        for n in name_all:
            await redis_client.rpush(f"refresh_config:{n}", json.dumps(data))


async def subscribe_log_channel():
    channel_name = 'logs'
    logger.info(f"Subscribed to channel {channel_name}")
    while True:
        try:
            async for redis_client in get_redis_pool():
                async with redis_client.pubsub() as pubsub:
                    await pubsub.psubscribe(channel_name)
                    while True:
                        message = await pubsub.get_message(ignore_subscribe_messages=True, timeout=3)
                        if message is not None:
                            data = json.loads(message["data"])
                            logger.info("Received message:" + json.dumps(data))
                            log_name = data["name"]
                            if log_name in GET_LOG_NAME:
                                if log_name not in LOG_INFO:
                                    LOG_INFO[log_name] = []
                                LOG_INFO[log_name].append(data['log'])
                            if "Register Success" in data['log']:
                                await check_node_task(log_name, redis_client)
                            await redis_client.rpush(f'log:{log_name}', data['log'])
                            total_logs = await redis_client.llen(f'log:{log_name}')
                            if total_logs > TOTAL_LOGS:
                                await redis_client.delete(f'log:{log_name}')
        except Exception as e:
            logger.error(f"An error occurred: {e}. Reconnecting...")
            await asyncio.sleep(1)  # 等待一段时间后尝试重新连接


async def check_node_task(node_name, redis_conn):
    async for mongo_client in get_mongo_db():
        query = {
            "progress": {"$ne": 100},
            "$or": [
                {"node": node_name},
                {"allNode": True}
            ]
        }
        cursor: AsyncIOMotorCursor = mongo_client.task.find(query)
        result = await cursor.to_list(length=None)
        if len(result) == 0:
            return
        # Process the result as needed
        for doc in result:
            template_data = await get_task_data(mongo_client, doc, str(doc["_id"]))
            await redis_conn.rpush(f"NodeTask:{node_name}", json.dumps(template_data))
        return


async def get_redis_online_data(redis_con):
    async with redis_con as redis:
        # 获取所有以 node: 开头的键
        keys = await redis.keys("node:*")
        # 构建结果字典
        result = []
        for key in keys:
            name = key.split(":")[1]
            hash_data = await redis.hgetall(key)
            if hash_data.get('state') == '1':
                result.append(name)
        return result
