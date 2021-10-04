// Dependencies
import axios from "axios";

// Base URL
const API = axios.create({
	baseURL: "http://localhost:5000",
	withCredentials: true
});

export const subscribeNotifications = subscriptionData =>
	API.post("/n/subscribe", subscriptionData);

export const unsubscribeNotifications = subscriptionData =>
	API.post("/n/unsubscribe", subscriptionData);
