import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
	searchedBooks: [],
	selectedBook: null,
	bookDetailsModal: null
};

export const bookSlice = createSlice({
	name: "book",
	initialState: initialState,
	reducers: {
		setBookDetailsModal: (state, { payload }) => {
			state.bookDetailsModal = payload;
		},
		setSearchedBooks: (state, { payload }) => {
			state.searchedBooks = payload;
		},
		setSelectedBook: (state, { payload }) => {
			state.selectedBook = payload;
		}
	}
});

export const { setBookDetailsModal, setSearchedBooks, setSelectedBook } = bookSlice.actions;
