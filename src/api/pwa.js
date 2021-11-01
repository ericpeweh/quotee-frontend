// Dependencies
import axios from "axios";
import { BASE_URL } from "./BASEURL";

// Base URL
const API = axios.create({
	baseURL: BASE_URL,
	withCredentials: true,
	credentials: "include"
});

API.interceptors.request.use(req => {
	if (localStorage.getItem("jwt")) {
		req.headers.Authorization = `Bearer ${localStorage.getItem("jwt")}`;
	}

	return req;
});

export const subscribeNotifications = subscriptionData =>
	API.post("/n/subscribe", subscriptionData);

export const unsubscribeNotifications = subscriptionData =>
	API.post("/n/unsubscribe", subscriptionData);
