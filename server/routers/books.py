import json
import pandas as pd

from fastapi import APIRouter, Query

from utils.search_utils import get_id_from_partial_name
from utils.similar_books import find_similar_books

# router object for Jobs
router = APIRouter(prefix="/api", tags=["books"])

original_df = pd.read_csv("datasets/original_dataset.csv")


@router.get("/v1/get_sample_books", tags=["books"])
async def get_sample_books(current_books: list[int] | None = Query(default=[])):

    # Check if the already shown books have reached the amount in the data base
    if len(current_books) < len(original_df):
        books = original_df.drop(current_books).sample(16)

        return json.loads(books.to_json(orient="records"))

    return None


@router.get("/v1/search_books_by_name", tags=["books"])
async def get_books_by_name(search_name: str):

    found_books = get_id_from_partial_name(partial=search_name, dataset=original_df)

    return json.loads(found_books.to_json(orient="records"))


@router.get("/v1/get_similar_books", tags=["books"])
async def get_similar_books(id: int):

    recommendations = find_similar_books(id=id, dataset=original_df)

    return json.loads(recommendations.to_json(orient="records"))
