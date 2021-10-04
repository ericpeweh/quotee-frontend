// Dependencies
import { createAsyncThunk } from "@reduxjs/toolkit";

// API
import * as API from "../api/users";

export const signUp = createAsyncThunk(
	"loginRegister/register",
	async (newUser, { rejectWithValue }) => {
		try {
			const response = await API.signUp(newUser);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const signIn = createAsyncThunk(
	"loginRegister/login",
	async (userData, { rejectWithValue }) => {
		try {
			const response = await API.signIn(userData);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const verifyEmail = createAsyncThunk(
	"emailVerification/verify",
	async (token, { rejectWithValue }) => {
		try {
			const response = await API.verifyEmail(token);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const changePassword = createAsyncThunk(
	"settings/changePassword",
	async (credentials, { rejectWithValue }) => {
		try {
			const response = await API.changePassword(credentials);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const requestResetPassword = createAsyncThunk(
	"loginRegister/requestResetPassword",
	async (emailOrUsername, { rejectWithValue }) => {
		try {
			const response = await API.requestResetPassword(emailOrUsername);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const resetPassword = createAsyncThunk(
	"loginRegister/resetPassword",
	async (credentials, { rejectWithValue }) => {
		try {
			const response = await API.resetPassword(credentials);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const updateUserProfile = createAsyncThunk(
	"userProfile/updateProfile",
	async (userData, { rejectWithValue }) => {
		try {
			const response = await API.updateUserProfile(userData);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const changeProfilePicture = createAsyncThunk(
	"settings/changeProfilePicture",
	async (imageData, { rejectWithValue }) => {
		try {
			const response = await API.changeProfilePicture(imageData);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const deleteProfilePicture = createAsyncThunk(
	"settings/deleteProfilePicture",
	async (payload, { rejectWithValue }) => {
		try {
			const response = await API.deleteProfilePicture();
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const fetchUserSuggestion = createAsyncThunk(
	"userSuggestion/fetchUser",
	async (payload, { rejectWithValue }) => {
		try {
			const response = await API.fetchUserSuggestion();
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const fetchUserProfile = createAsyncThunk(
	"userProfile/fetchUserProfile",
	async (username, { rejectWithValue }) => {
		try {
			const response = await API.fetchUserProfile(username);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const fetchUserPosts = createAsyncThunk(
	"userProfile/fetchUserPosts",
	async (username, { rejectWithValue }) => {
		try {
			const response = await API.fetchUserPosts(username);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const fetchMoreUserPosts = createAsyncThunk(
	"userProfile/fetchMoreUserPosts",
	async (fetchData, { rejectWithValue }) => {
		try {
			const response = await API.fetchMoreUserPosts(fetchData);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const searchUserPosts = createAsyncThunk(
	"userProfile/searchUserPosts",
	async (searchData, { rejectWithValue }) => {
		try {
			const response = await API.searchUserPosts(searchData);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const fetchUserFavorites = createAsyncThunk(
	"userFavorites/fetchUserFavorites",
	async (username, { rejectWithValue }) => {
		try {
			const response = await API.fetchUserFavorites(username);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const fetchUserArchived = createAsyncThunk(
	"userArchived/fetchUserArchived",
	async (username, { rejectWithValue }) => {
		try {
			const response = await API.fetchUserArchived(username);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const fetchSettings = createAsyncThunk(
	"settings/fetchSettings",
	async (username, { rejectWithValue }) => {
		try {
			const response = await API.fetchSettings(username);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const followUser = createAsyncThunk(
	"user/followUser",
	async (targetId, { rejectWithValue }) => {
		try {
			const response = await API.followUser(targetId);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const fetchPopulatedFollowing = createAsyncThunk(
	"userProfile/fetchPopulatedFollowing",
	async (username, { rejectWithValue }) => {
		try {
			const response = await API.fetchPopulatedFollowing(username);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const fetchPopulatedFollowers = createAsyncThunk(
	"userProfile/fetchPopulatedFollowers",
	async (username, { rejectWithValue }) => {
		try {
			const response = await API.fetchPopulatedFollowers(username);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const fetchMorePopulatedFollowing = createAsyncThunk(
	"userProfile/fetchMorePopulatedFollowing",
	async (fetchData, { rejectWithValue }) => {
		try {
			const response = await API.fetchMorePopulatedFollowing(fetchData);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const fetchMorePopulatedFollowers = createAsyncThunk(
	"userProfile/fetchMorePopulatedFollowers",
	async (fetchData, { rejectWithValue }) => {
		try {
			const response = await API.fetchMorePopulatedFollowers(fetchData);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const searchPopulatedFollowing = createAsyncThunk(
	"userProfile/searchPopulatedFollowing",
	async (searchData, { rejectWithValue }) => {
		try {
			const response = await API.searchPopulatedFollowing(searchData);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const searchPopulatedFollowers = createAsyncThunk(
	"userProfile/searchPopulatedFollowers",
	async (searchData, { rejectWithValue }) => {
		try {
			const response = await API.searchPopulatedFollowers(searchData);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const fetchTopUsers = createAsyncThunk(
	"social/fetchTopUsers",
	async (payload, { rejectWithValue }) => {
		try {
			const response = await API.fetchTopUsers();
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const fetchNotifications = createAsyncThunk(
	"notifications/fetchNotifications",
	async (current, { rejectWithValue }) => {
		try {
			const response = await API.fetchNotifications(current);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);
