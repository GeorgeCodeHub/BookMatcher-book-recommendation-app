import uvicorn

from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

from .routers import books


app = FastAPI(
    title="Book Recommendation API",
    description="The APIs used to call collections of books",
)

app.include_router(books.router)

# Load frontend at root of the server
app.mount("/", StaticFiles(directory="build/", html=True), name="static")
