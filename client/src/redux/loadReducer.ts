import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
	isDataLoading: true
};

export const loadSlice = createSlice({
	name: "load",
	initialState: initialState,
	reducers: {
		setIsDataLoading: (state, { payload }) => {
			state.isDataLoading = payload;
		}
	}
});

export const { setIsDataLoading } = loadSlice.actions;
