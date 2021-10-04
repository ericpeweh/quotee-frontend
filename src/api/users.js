// Dependencies
import axios from "axios";

// Base URL
const API = axios.create({
	baseURL: "http://localhost:5000",
	withCredentials: true
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

export const fetchUserPosts = username => API.get(`/u/${username}/p`);

export const fetchMoreUserPosts = ({ username, current }) =>
	API.get(`/u/${username}/p?current=${current}`);

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
