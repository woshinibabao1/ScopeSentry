# -------------------------------------
# @file      : crawler.py
# @author    : Autumn
# @contact   : rainy-autumn@outlook.com
# @time      : 2024/10/20 21:17
# -------------------------------------------
from fastapi import APIRouter, Depends
from api.users import verify_token
from motor.motor_asyncio import AsyncIOMotorCursor
from core.util import *
from pymongo import DESCENDING
from loguru import logger

router = APIRouter()


@router.post("/data")
async def crawler_data(request_data: dict, db=Depends(get_mongo_db), _: dict = Depends(verify_token)):
    try:
        page_index = request_data.get("pageIndex", 1)
        page_size = request_data.get("pageSize", 10)
        query = await get_search_query("crawler", request_data)
        if query == "":
            return {"message": "Search condition parsing error", "code": 500}
        total_count = await db['crawler'].count_documents(query)
        cursor: AsyncIOMotorCursor = ((db['crawler'].find(query, {"_id": 0,
                                                                  "id": {"$toString": "$_id"},
                                                                  "method": 1,
                                                                  "body": 1,
                                                                  "url": 1
                                                                  })
                                       .sort([('_id', -1)])
                                       .skip((page_index - 1) * page_size)
                                       .limit(page_size))
        )
        result = await cursor.to_list(length=None)
        return {
            "code": 200,
            "data": {
                'list': result,
                'total': total_count
            }
        }
    except Exception as e:
        logger.error(str(e))
        # Handle exceptions as needed
        return {"message": "error", "code": 500}