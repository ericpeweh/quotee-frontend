// Dependencies
import axios from "axios";

// Base URL
const API = axios.create({
	baseURL: "https://quoteeapi.herokuapp.com",
	withCredentials: true,
	credentials: "include"
});

export const subscribeNotifications = subscriptionData =>
	API.post("/n/subscribe", subscriptionData);

export const unsubscribeNotifications = subscriptionData =>
	API.post("/n/unsubscribe", subscriptionData);
