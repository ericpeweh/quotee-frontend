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

// Get all posts
export const fetchPosts = currentLength => API.get(`/p?quotes=${currentLength || 0}`);

// Get single post (details)
export const fetchPost = postId => API.get(`/p/${postId}`);

// Get post for edit
export const fetchEditPost = postId => API.get(`/p/${postId}/edit`);

// Get post likes
export const fetchLikes = postId => API.get(`/p/${postId}/likes?current=${0}`);

// Get more post likes
export const fetchMoreLikes = ({ postId, current }) =>
	API.get(`/p/${postId}/likes?current=${current}`);

// Search post likes
export const searchLikes = ({ username, postId }) =>
	API.get(`/p/${postId}/likes?username=${username}`);

// Search posts by quotes
export const fetchPostsBySearchQuotes = ({ query, current = 0 }) =>
	API.get(`/p/search?quotes=${query.quotes}&current=${current}`);

// Search posts (advanced search)
export const fetchPostsByAdvancedSearch = ({ query, current = 0 }) => {
	const { quotes, author, tags, fromDate, toDate } = query;
	return API.get(
		`/p/search?quotes=${quotes}&author=${author}&tags=${tags}&fromDate=${fromDate}&toDate=${toDate}&current=${current}`
	);
};

// Get 6 top quotes
export const fetchTopQuotes = () => API.get("/p/top");

// Create post
export const createPost = ({ quotes, tags }) => API.post("/p", { quotes, tags });

// Create post
export const editPost = editData => API.patch(`/p/${editData.postId}`, editData.editedPost);

// Delete post
export const deletePost = postId => API.delete(`/p/${postId}`);

// Like & unlike post
export const likePost = postId => API.patch(`/p/${postId}/likePost`);

// Favorite & unfavorite post
export const favoritePost = postId => API.patch(`/p/${postId}/favoritePost`);

// Archive post
export const archivePost = postId => API.patch(`/p/${postId}/archivePost`);

// Unarchive post
export const unarchivePost = postId => API.patch(`/p/${postId}/unarchivePost`);

// Report post
export const reportPost = ({ code, postId }) => API.patch(`/p/${postId}/report?code=${code}`);

// Fetch temp posts
export const fetchTempPosts = currentLength => API.get(`/p?quotes=${currentLength || 0}`);
