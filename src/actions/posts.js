// Dependencies
import { createAsyncThunk } from "@reduxjs/toolkit";

// Api to backend
import * as API from "../api/posts";

// Thunk (async)
export const fetchPosts = createAsyncThunk(
	"posts/fetchPosts",
	async (payload, { rejectWithValue }) => {
		try {
			const response = await API.fetchPosts();
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const fetchMorePosts = createAsyncThunk(
	"posts/fetchMorePosts",
	async (currentLength, { rejectWithValue }) => {
		try {
			const response = await API.fetchPosts(currentLength);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const fetchPost = createAsyncThunk("post/fetchPost", async (postId, { rejectWithValue }) => {
	try {
		const response = await API.fetchPost(postId);
		return response.data;
	} catch (error) {
		return rejectWithValue(error.response.data);
	}
});

export const fetchEditPost = createAsyncThunk(
	"post/fetchEditPost",
	async (postId, { rejectWithValue }) => {
		try {
			const response = await API.fetchEditPost(postId);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const fetchPostsBySearchQuotes = createAsyncThunk(
	"search/fetchPostsBySearchQuotes",
	async (query, { rejectWithValue }) => {
		try {
			const response = await API.fetchPostsBySearchQuotes(query);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const fetchPostsByAdvancedSearch = createAsyncThunk(
	"search/fetchPostsByAdvancedSearch",
	async (query, { rejectWithValue }) => {
		try {
			const response = await API.fetchPostsByAdvancedSearch(query);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const fetchLikes = createAsyncThunk(
	"likes/fetchLikes",
	async (postId, { rejectWithValue }) => {
		try {
			const response = await API.fetchLikes(postId);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const fetchMoreLikes = createAsyncThunk(
	"likes/fetchMoreLikes",
	async (fetchData, { rejectWithValue }) => {
		try {
			const response = await API.fetchMoreLikes(fetchData);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const searchLikes = createAsyncThunk(
	"likes/searchLikes",
	async (postData, { rejectWithValue }) => {
		try {
			const response = await API.searchLikes(postData);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const likePost = createAsyncThunk("likes/likePost", async (postId, { rejectWithValue }) => {
	try {
		const response = await API.likePost(postId);
		return response.data;
	} catch (error) {
		return rejectWithValue(error.response.data);
	}
});

export const favoritePost = createAsyncThunk(
	"favorites/favoritePost",
	async (postId, { rejectWithValue }) => {
		try {
			const response = await API.favoritePost(postId);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const archivePost = createAsyncThunk(
	"archived/archivePost",
	async ({ postId, history }, { rejectWithValue }) => {
		try {
			const response = await API.archivePost(postId);
			history.push("/archived");
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const unarchivePost = createAsyncThunk(
	"archived/unarchivePost",
	async (postId, { rejectWithValue }) => {
		try {
			const response = await API.unarchivePost(postId);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const reportPost = createAsyncThunk(
	"report/reportPost",
	async (reportData, { rejectWithValue }) => {
		try {
			const response = await API.reportPost(reportData);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const createPost = createAsyncThunk(
	"newQuotes/createPost",
	async (quotesData, { rejectWithValue }) => {
		try {
			const response = await API.createPost(quotesData);
			if (quotesData.isDraft) {
				localStorage.removeItem(quotesData.draftId);
			}
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const editPost = createAsyncThunk(
	"editPost/editPost",
	async (editData, { rejectWithValue }) => {
		try {
			const response = await API.editPost(editData);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const deletePost = createAsyncThunk(
	"post/deletePost",
	async ({ postId, history, username }, { rejectWithValue }) => {
		try {
			const response = await API.deletePost(postId);
			history.push(`/${username}`);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const fetchTopQuotes = createAsyncThunk(
	"social/fetchTopQuotes",
	async (payload, { rejectWithValue }) => {
		try {
			const response = await API.fetchTopQuotes();
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);
