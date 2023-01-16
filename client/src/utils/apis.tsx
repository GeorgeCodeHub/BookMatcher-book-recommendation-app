import { http } from "./http";

import { bookT } from "../vite-env";

export const getSampleBooks = async (current_books = []) => {
	return await http
		.get("/books/get_samples", {
			params: {
				current_books: current_books && current_books.map((book: bookT) => book.index)
			}
		})
		.then((response) => {
			if (response.status === 200) {
				return response.data;
			}
			return [];
		});
};

export const getSimilarBooks = async (id) => {
	return await http.get("/books/get_similar_books", { params: { id: id } }).then((response) => {
		if (response.status === 200) {
			response.data.shift();

			return response.data;
		}
		return [];
	});
};

export const getSearchedBooks = async (searchedBookName = "") => {
	return await http
		.get("/search/book_by_name", {
			params: {
				search_name: searchedBookName
			}
		})
		.then((response) => {
			if (response.status === 200) {
				return response.data;
			}
			return [];
		});
};
