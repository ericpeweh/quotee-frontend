// Dependencies
import axios from "axios";

// Base URL
const API = axios.create({
	baseURL: "https://quoteeapi.herokuapp.com",
	withCredentials: true,
	credentials: "include"
});

export const fetchArticles = () => API.get("/a");

export const fetchArticle = articleId => API.get(`/a/${articleId}`);
