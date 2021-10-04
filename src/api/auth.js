// Dependencies
import axios from "axios";

// Base URL
const API = axios.create({
	baseURL: "https://quoteeapi.herokuapp.com",
	withCredentials: true,
	credentials: "include"
});

export const auth = () => API.get("/u/auth");

export const signOut = () => API.post("/u/signout");
