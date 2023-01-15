import React, { useState, useEffect, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setIsDataLoading } from "../redux/loadReducer";

import autoAnimate from "@formkit/auto-animate";

import { getSampleBooks } from "../utils/apis";

import SearchBar from "../components/SearchBar";
import ListLayout from "../components/ListLayout";

function BooksList() {
	const [sampledBooks, setSampledBooks] = useState([]);

	const { searchedBooks } = useSelector((state: any) => state.book);
	const { isDataLoading } = useSelector((state: any) => state.load);

	const dispatch = useDispatch();

	const parent = useRef(null);

	const getOtherSampledBooks = async () => {
		const data = await getSampleBooks(sampledBooks);

		if (data) setSampledBooks(data);
	};

	useEffect(() => {
		(async () => {
			dispatch(setIsDataLoading(true));

			const data = await getSampleBooks();

			if (data) {
				dispatch(setIsDataLoading(false));
				setSampledBooks(data);
			}
		})();
	}, []);

	useEffect(() => {
		parent.current && autoAnimate(parent.current);
	}, [parent]);

	return (
		<div ref={parent}>
			<SearchBar />
			{searchedBooks.length ? (
				<ListLayout books={searchedBooks} />
			) : (
				!isDataLoading && (
					<>
						<button
							type="button"
							className="mt-8 text-white bg-teal-400 hover:bg-teal-500 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-4 py-2"
							onClick={getOtherSampledBooks}
						>
							SHOW ME OTHER OPTIONS
						</button>

						<ListLayout books={sampledBooks} />
					</>
				)
			)}
		</div>
	);
}

export default BooksList;
