import React from "react";
import ReactDOM from "react-dom/client";

import { QueryClient, QueryClientProvider } from "react-query";

import { Provider } from "react-redux";

import store from "./redux/store";

import App from "./App";

import "./styles/index.scss";

export const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<App />
			</Provider>
		</QueryClientProvider>
	</React.StrictMode>
);
