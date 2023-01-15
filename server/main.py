import uvicorn

from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

from .routers import books


if __name__ == "__main__":
    uvicorn.run("server.api:app", host="0.0.0.0", port=8000, reload=True)

app = FastAPI(
    title="Book Recommendation API",
    description="The APIs used to call collections of books",
)

app.include_router(books.router)

# Load frontend at root of the server
app.mount("/", StaticFiles(directory="build/", html=True), name="static")
