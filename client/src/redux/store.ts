import { configureStore } from "@reduxjs/toolkit";

// import logger from "redux-logger";
import { bookSlice } from "./bookReducer";
import { loadSlice } from "./loadReducer";

export default configureStore({
	reducer: {
		book: bookSlice.reducer,
		load: loadSlice.reducer
	}
});
