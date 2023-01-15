import { http } from "./http";

import { bookT } from "../vite-env";

export const getSampleBooks = async (current_books = []) => {
	return await http
		.get("/get_sample_books", {
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

export const getSearchedBooks = async (searchedBookName = "") => {
	return await http
		.get("/search_books_by_name", {
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
