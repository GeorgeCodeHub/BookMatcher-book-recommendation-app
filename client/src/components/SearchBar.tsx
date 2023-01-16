import { useState, useEffect, useRef } from "react";

import { useDispatch } from "react-redux";
import { setSearchedBooks } from "../redux/bookReducer";
import { setIsDataLoading } from "../redux/loadReducer";

import { getSearchedBooks } from "../utils/apis";

import "../styles/SearchBar.scss";

function SearchBar() {
	const [searchedBookName, setSearchedBookName] = useState("");

	const dispatch = useDispatch();

	const inputRef = useRef<any>();

	const onSearchSubmit = (event) => {
		event.preventDefault();
	};

	useEffect(() => {
		let timer: NodeJS.Timeout | null = null;

		const sendData = () => {
			// If the user keeps on typing then the timeout is cleared and restarted
			if (timer) clearTimeout(timer);

			timer = setTimeout(() => {
				setSearchedBookName(inputRef.current.value);
			}, 1000);
		};

		const element = inputRef.current;
		// Set listener and start timeout
		element.addEventListener("keyup", sendData);

		return () => {
			// Remove listener when unmounting
			element.removeEventListener("keyup", sendData);
		};
	}, []);

	useEffect(() => {
		(async () => {
			if (searchedBookName) {
				dispatch(setIsDataLoading(true));

				const data = await getSearchedBooks(searchedBookName);

				dispatch(setIsDataLoading(false));

				if (data) dispatch(setSearchedBooks(data));
			}
		})();
	}, [searchedBookName, dispatch]);

	return (
		<>
			<h1 className="lg:text-6xl md:text-3xl sm:text-xl font-bold select-none">
				A 📚Book recommendation library <br /> (with 50K books😮🤯)
			</h1>
			<p className="pt-5">But how does it work? 🤔</p>
			<p>Simply search a book that you have recently read or select one of the sample belows to get recommendations.</p>
			<form className="search-bar-container" onSubmit={onSearchSubmit}>
				<label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">
					SEARCH
				</label>
				<div className="relative">
					<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
						<svg
							className="w-5 h-5 text-gray-500"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							></path>
						</svg>
					</div>
					<input
						ref={inputRef}
						type="search"
						id="default-search"
						placeholder="Search Books Here..."
						className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-teal-500 focus:border-teal-500"
						required
						onChange={(e) => {
							if (e.target.value === "") dispatch(setSearchedBooks([]));
						}}
					/>
					<button
						type="submit"
						className="text-white absolute right-2.5 bottom-2.5 bg-teal-400 hover:bg-teal-500 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-4 py-2"
					>
						Search
					</button>
				</div>
			</form>
		</>
	);
}

export default SearchBar;
