import json

from fastapi import APIRouter, Query

from ..utils import similar_books
from ..datasets import store

# router object for Jobs
router = APIRouter(prefix="/books", tags=["books"])


@router.get("/get_samples")
async def get_sample_books(current_books=[]):

    # Check if the already shown books have reached the amount in the data base
    if len(current_books) < len(store.original_data):
        books = store.original_data.drop(current_books).sample(16)

        return json.loads(books.to_json(orient="records"))

    return None


@router.get("/get_similar")
async def get_similar_books(id: int):

    recommendations = similar_books.find_similar_books(
        id=id, dataset=store.original_data
    )

    return json.loads(recommendations.to_json(orient="records"))
