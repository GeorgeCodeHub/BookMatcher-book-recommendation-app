import React, { useState, useEffect, useRef } from "react";

import autoAnimate from "@formkit/auto-animate";

import BookCard from "./BookCard";

import { bookT } from "../vite-env";

import "../styles/ListLayout.scss";

function ListLayout({ books }) {
	const parent = useRef(null);

	useEffect(() => {
		parent.current && autoAnimate(parent.current);
	}, [parent]);

	return (
		<section className="pt-10">
			<div
				ref={parent}
				className="grid grid-flow-row gap-8 items-start text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
			>
				{books.map((book, index) => (
					<BookCard key={index} book={book} />
				))}
			</div>
		</section>
	);
}

export default ListLayout;
