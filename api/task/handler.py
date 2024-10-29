# -------------------------------------
# @file      : handler.py
# @author    : Autumn
# @contact   : rainy-autumn@outlook.com
# @time      : 2024/10/28 22:09
# -------------------------------------------
import json

from bson import ObjectId
from core.apscheduler_handler import scheduler
from api.task.util import get_target_list
from core.db import get_mongo_db
from core.redis_handler import get_redis_pool
from core.util import get_now_time
from loguru import logger
from api.node import get_node_all


async def insert_task(request_data):
    async for db in get_mongo_db():
        target = request_data.get("target", "")
        targetList = []
        targetTmp = ""
        for t in target.split("\n"):
            t.replace("http://", "").replace("https://", "")
            t = t.strip("\n").strip("\r").strip()
            if t != "" and t not in targetList:
                targetList.append(t)
                targetTmp += t + "\n"
        taskNum = len(targetList)
        request_data['taskNum'] = taskNum
        request_data['target'] = targetTmp.strip("\n")
        request_data['progress'] = 0
        request_data["creatTime"] = get_now_time()
        request_data["endTime"] = ""
        if "All Poc" in request_data['vulList']:
            request_data['vulList'] = ["All Poc"]
        result = await db.task.insert_one(request_data)
        if result.inserted_id:
            await create_scan_task(request_data, str(result.inserted_id))
            return result.inserted_id


async def create_scan_task(request_data, id):
    try:
        async for redis_con in get_redis_pool():
            async for db in get_mongo_db():
                request_data["id"] = str(id)
                if request_data['allNode']:
                    request_data["node"] = await get_node_all(redis_con)
                # 删除可能存在缓存
                keys_to_delete = [
                    f"TaskInfo:tmp:{id}",
                    f"TaskInfo:{id}",
                    f"TaskInfo:time:{id}",
                ]
                progresskeys = await redis_con.keys(f"TaskInfo:progress:{id}:*")
                keys_to_delete.extend(progresskeys)
                progresskeys = await redis_con.keys(f"duplicates:{id}:")
                keys_to_delete.extend(progresskeys)
                if keys_to_delete:
                    await redis_con.delete(*keys_to_delete)
                    template_data = await db.ScanTemplates.find_one({"_id": ObjectId(request_data["template"])})
                    # 如果选择了poc 将poc参数拼接到nuclei的参数中
                    if len(template_data['vullist']) != 0:
                        vul_tmp = ""
                        if "All Poc" in template_data['vullist']:
                            vul_tmp = "*"
                        else:
                            for vul in template_data['vullist']:
                                vul_tmp += vul + ","
                        vul_tmp = vul_tmp.strip(",")
                        if "VulnerabilityScan" in template_data["Parameters"]:
                            if "ed93b8af6b72fe54a60efdb932cf6fbc" in template_data["Parameters"]["VulnerabilityScan"]:
                                template_data["Parameters"]["VulnerabilityScan"]["ed93b8af6b72fe54a60efdb932cf6fbc"] = \
                                template_data["Parameters"]["VulnerabilityScan"][
                                    "ed93b8af6b72fe54a60efdb932cf6fbc"] + " -t " + vul_tmp
                    # 删除原始的vullist
                    del template_data["vullist"]
                    del template_data["_id"]
                    # 设置任务名称
                    template_data["TaskName"] = request_data["name"]
                    # 设置忽略目标
                    template_data["ignore"] = request_data["ignore"]
                    # 设置去重
                    template_data["duplicates"] = request_data["duplicates"]
                    # 任务id
                    template_data["TaskId"] = str(id)
                    # 任务类型
                    template_data["type"] = "scan"
                    # 原始的target生成target list
                    target_list = await get_target_list(request_data['target'])
                    async with redis_con as redis:
                        # 将任务目标插入redis中
                        await redis.lpush(f"TaskInfo:{id}", *target_list)
                        # 分发任务
                        for name in request_data["node"]:
                            await redis.rpush(f"NodeTask:{name}", json.dumps(template_data))
                    return True
    except Exception as e:
        logger.error(str(e))
        # Handle exceptions as needed
        return False


async def scheduler_scan_task(id):
    logger.info(f"Scheduler scan {id}")
    async for db in get_mongo_db():
        next_time = scheduler.get_job(id).next_run_time
        formatted_time = next_time.strftime("%Y-%m-%d %H:%M:%S")
        time_now = get_now_time()
        update_document = {
            "$set": {
                "lastTime": time_now,
                "nextTime": formatted_time
            }
        }
        await db.ScheduledTasks.update_one({"id": id}, update_document)
        doc = await db.ScheduledTasks.find_one({"id": id})
        doc["name"] = doc["name"] + "-scan-" + time_now
        await insert_task(doc)