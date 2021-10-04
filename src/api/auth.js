// Dependencies
import axios from "axios";

// Base URL
const API = axios.create({
	baseURL: "http://localhost:5000",
	withCredentials: true
});

export const auth = () => API.get("/u/auth");

export const signOut = () => API.post("/u/signout");
