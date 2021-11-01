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

export const auth = () => API.get("/u/auth");

export const signOut = () => API.post("/u/signout");
