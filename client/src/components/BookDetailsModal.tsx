import React, { useEffect, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setBookDetailsModal, setSelectedBook } from "../redux/bookReducer";

function BookDetailsModal() {
	const { bookDetailsModal } = useSelector((state: any) => state.book);

	const dispatch = useDispatch();

	const onBookClose = () => {
		dispatch(setBookDetailsModal(null));
	};

	const onModalOutsideClick = (event) => {
		event.preventDefault();
		onBookClose();
	};

	const onSimilarBooksClick = (book) => {
		dispatch(setSelectedBook(book));
		onBookClose();
	};

	useEffect(() => {
		if (bookDetailsModal) document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [bookDetailsModal]);

	if (bookDetailsModal)
		return (
			<div
				aria-hidden="true"
				className="fixed flex justify-center z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full bg-gray-800/25"
				onClick={onModalOutsideClick}
			>
				<div
					className="w-full max-w-lg"
					onClick={(event) => {
						// 👇️ stop event propagation (won't trigger parent's onClick)
						event.stopPropagation();
					}}
				>
					<div className="relative flex flex-col h-full bg-white rounded-lg shadow">
						<div className="flex-1 overflow-y-auto text-left">
							<button
								type="button"
								className="text-white bg-teal-400 hover:bg-teal-500 hover:text-white rounded-lg text-sm p-1.5 ml-auto inline-flex items-center absolute top-5 right-5"
								data-modal-hide="defaultModal"
								onClick={onBookClose}
							>
								<svg
									aria-hidden="true"
									className="w-5 h-5"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
										clipRule="evenodd"
									></path>
								</svg>
								<span className="sr-only">Close modal</span>
							</button>
							<img
								className="w-full object-cover rounded-t-lg"
								style={{ maxHeight: "60%" }}
								src={bookDetailsModal?.img}
								alt=""
							/>
							<div className="p-5 space-y-5">
								<a href={bookDetailsModal?.link} target="_blank">
									<p className="text-lg font-bold leading-relaxed text-gray-800 hover:underline">
										{bookDetailsModal?.title}
									</p>
								</a>
								<p className="italic">By {bookDetailsModal?.author}</p>
								<p className="text-base leading-relaxed text-gray-500">{bookDetailsModal?.desc}</p>
								<p className="text-base leading-relaxed text-gray-500">
									{bookDetailsModal?.genre.split(",").join(", ")}
								</p>
							</div>
						</div>
						<div className="flex items-center justify-center p-5 space-x-2 border-t bg-white border-gray-200 rounded-b">
							<button
								className="text-white bg-teal-400 hover:bg-teal-500 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
								data-modal-hide="defaultModal"
								type="button"
								onClick={() => onSimilarBooksClick(bookDetailsModal)}
							>
								SHOW SIMILAR BOOKS
							</button>
						</div>
					</div>
				</div>
			</div>
		);

	return null;
}

export default BookDetailsModal;
