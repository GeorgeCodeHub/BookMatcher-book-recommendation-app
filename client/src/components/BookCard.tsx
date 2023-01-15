import React from "react";

import { useDispatch } from "react-redux";
import { setBookDetailsModal } from "../redux/bookReducer";

import { bookT } from "../vite-env";

function BookCard({ book }: { book: bookT }) {
	const dispatch = useDispatch();

	const onBookClick = (book) => {
		dispatch(setBookDetailsModal(book));
	};

	return (
		<figure className="my-2 rounded shadow-lg shadow-gray-700 bg-white duration-300 hover:-translate-y-4 hover:scale-105">
			<div className="cursor-pointer" onClick={() => onBookClick(book)}>
				<figure>
					<img src={book?.img || undefined} className="rounded-t h-72 w-full object-cover" />
					<figcaption className="p-4 text-left">
						<p className="text-lg font-bold leading-relaxed text-gray-800">{book?.title}</p>
						<p className="italic">By {book?.author}</p>
						<div className="flex items-center mb-4">
							<svg
								aria-hidden="true"
								className={`w-5 h-5  ${book?.rating >= 1 ? "text-yellow-400" : "text-gray-300"}`}
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>First star</title>
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
							</svg>
							<svg
								aria-hidden="true"
								className={`w-5 h-5  ${book?.rating >= 2 ? "text-yellow-400" : "text-gray-300"}`}
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>Second star</title>
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
							</svg>
							<svg
								aria-hidden="true"
								className={`w-5 h-5  ${book?.rating >= 3 ? "text-yellow-400" : "text-gray-300"}`}
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>Third star</title>
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
							</svg>
							<svg
								aria-hidden="true"
								className={`w-5 h-5  ${book?.rating >= 4 ? "text-yellow-400" : "text-gray-300"}`}
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>Fourth star</title>
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
							</svg>
							<svg
								aria-hidden="true"
								className={`w-5 h-5  ${book?.rating === 5 ? "text-yellow-400" : "text-gray-300"}`}
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>Fifth star</title>
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
							</svg>
							<p className="ml-2 text-sm font-medium text-gray-500">{book?.rating} out of 5</p>
						</div>
						<small className="book-description leading-5 text-ellipsis text-gray-500">{book?.desc}</small>
					</figcaption>
				</figure>
			</div>
		</figure>
	);
}

export default BookCard;
