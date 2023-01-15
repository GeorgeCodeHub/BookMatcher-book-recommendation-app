import { useSelector } from "react-redux";

import LoadingIndicator from "./components/LoadingIndicator";
import BooksList from "./screens/BooksList";
import SimilarBooksList from "./screens/SimilarBooksList";
import ScrollTopButton from "./components/ScrollTopButton";
import BookDetailsModal from "./components/BookDetailsModal";

import "./styles/App.scss";

function App() {
	const { selectedBook } = useSelector((state: any) => state.book);

	return (
		<div className="App">
			<LoadingIndicator />
			{selectedBook === null && <BooksList />}
			{selectedBook && <SimilarBooksList selectedBook={selectedBook} />}
			<ScrollTopButton />
			<BookDetailsModal />
		</div>
	);
}

export default App;
