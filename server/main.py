from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

from .routers import books, search


app = FastAPI(
    title="Book Recommendation API",
    description="The APIs used to call collections of books",
)

app.include_router(books.router)
app.include_router(search.router)


# Load frontend at root of the server
app.mount("/", StaticFiles(directory="server/build/", html=True), name="static")
