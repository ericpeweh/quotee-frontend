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

export const signUp = newUser => API.post("/u/signup", newUser);

export const signIn = userData => API.post("/u/signin", userData);

export const verifyEmail = token => API.post("/u/verifyEmail", token);

export const changePassword = credentials => API.post("/u/changePassword", credentials);

export const requestResetPassword = usernameOrEmail =>
	API.post("/u/resetPassword", usernameOrEmail);

export const resetPassword = credentials => API.post("/u/verifyResetPassword", credentials);

export const updateUserProfile = userData => API.post(`/u/updateProfile`, userData);

export const changeProfilePicture = imageData =>
	API.post("/u/changeProfilePicture", imageData, {
		headers: { "Content-Type": "multipart/form-data" }
	});

export const deleteProfilePicture = () => API.post("/u/deleteProfilePicture");

export const fetchUserSuggestion = () => API.get("/u/usersuggestion");

export const fetchUserProfile = username => API.get(`/u/${username}`);

export const fetchUserPosts = username => API.get(`/u/${username}/p?current=0`);

export const fetchMoreUserPosts = ({ username, current }) =>
	API.get(`/u/${username}/p?current=${current || 0}`);

export const searchUserPosts = ({ username, quotes }) =>
	API.get(`/u/${username}/p?quotes=${quotes}`);

export const fetchUserFavorites = username => API.get(`/u/${username}/f`);

export const fetchUserArchived = username => API.get(`/u/${username}/a`);

export const fetchSettings = username => API.get(`/u/${username}/s`);

export const followUser = targetId => API.patch(`/u/${targetId}/follow`);

export const fetchPopulatedFollowing = username => API.get(`/u/${username}/following?current=${0}`);

export const fetchPopulatedFollowers = username => API.get(`/u/${username}/followers?current=${0}`);

export const fetchMorePopulatedFollowing = ({ username, current }) =>
	API.get(`/u/${username}/following?current=${current}`);

export const fetchMorePopulatedFollowers = ({ username, current }) =>
	API.get(`/u/${username}/followers?current=${current}`);

export const searchPopulatedFollowing = ({ username, usernameQuery }) =>
	API.get(`/u/${username}/following?username=${usernameQuery}`);

export const searchPopulatedFollowers = ({ username, usernameQuery }) =>
	API.get(`/u/${username}/followers?username=${usernameQuery}`);

export const fetchTopUsers = () => API.get("/u/topuser");

export const fetchNotifications = current => API.get(`/u/n?current=${current}`);

export const reportUser = ({ code, username, description }) =>
	API.post(`/u/${username}/report`, { description, code });
