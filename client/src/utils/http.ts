import Axios from "axios";

import { baseHTTP } from "./consts";

export const http = Axios.create({
	baseURL: baseHTTP,
	timeout: 60000,
	params: { _dc: null },
	validateStatus: () => {
		return true;
	}
});

//Request interceptor
http.interceptors.request.use((request) => {
	if (!request.params) request.params = {};

	request.params._dc = new Date().getTime();
	return request;
});

//Response interceptor
http.interceptors.response.use((response) => {
	return response;
});
