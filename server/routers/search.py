import json


from fastapi import APIRouter

from ..utils import search_utils
from ..datasets import store


# router object for Jobs
router = APIRouter(prefix="/search", tags=["search"])


@router.get("/book_by_name")
async def get_books_by_name(search_name: str):

    found_books = search_utils.get_id_from_partial_name(
        partial=search_name, dataset=store.original_data
    )

    return json.loads(found_books.to_json(orient="records"))
