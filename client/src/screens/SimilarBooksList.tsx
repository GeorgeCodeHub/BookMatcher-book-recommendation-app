import React, { useState, useEffect, useRef } from "react";

import { useDispatch } from "react-redux";
import { setSelectedBook } from "../redux/bookReducer";

import autoAnimate from "@formkit/auto-animate";

import { http } from "../utils/http";
import { getSimilarBooks } from "../utils/apis";

import ListLayout from "../components/ListLayout";
import BookCard from "../components/BookCard";

import { bookT } from "../vite-env";

import "../styles/SimilarBooks.scss";

function SimilarBooksList({ selectedBook }: { selectedBook: bookT }) {
	const [similarBooksList, setSimilarBooksList] = useState([]);

	const parent = useRef(null);

	const dispatch = useDispatch();

	const onGoBackClick = () => {
		dispatch(setSelectedBook(null));
		setSimilarBooksList([]);
	};

	useEffect(() => {
		(async () => {
			if (selectedBook) {
				const data = await getSimilarBooks(selectedBook?.index);

				if (data) setSimilarBooksList(data);
			}
		})();
	}, [selectedBook]);

	useEffect(() => {
		parent.current && autoAnimate(parent.current);
	}, [parent]);

	return (
		<div ref={parent}>
			<button
				type="button"
				data-mdb-ripple="true"
				data-mdb-ripple-color="light"
				className="flex gap-2 items-center p-3 bg-teal-400 hover:bg-teal-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out bottom-8 right-8"
				onClick={onGoBackClick}
			>
				<svg
					aria-hidden="true"
					focusable="false"
					data-prefix="fas"
					className="w-4 h-4"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 448 512"
					style={{ transform: "rotate(-90deg)" }}
				>
					<path
						fill="currentColor"
						d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
					></path>
				</svg>
				<b>GO BACK</b>
			</button>
			<div className="text-divider">SELECTED BOOK</div>
			<div className="flex justify-center">
				<div className="md:w-6/12 lg:w-4/12 xl:w-3/12">
					<BookCard book={selectedBook} />
				</div>
			</div>
			<div className="text-divider">SOME RECOMMENDATIONS</div>
			<ListLayout books={similarBooksList} />
		</div>
	);
}

export default SimilarBooksList;
