// Dependencies
import { createAsyncThunk } from "@reduxjs/toolkit";

// API to backend
import * as API from "../api/articles";

// Thunk (async)
export const fetchArticles = createAsyncThunk(
	"social/fetchArticles",
	async (payload, { rejectWithValue }) => {
		try {
			const response = await API.fetchArticles();
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const fetchArticle = createAsyncThunk(
	"article/fetchArticle",
	async (articleId, { rejectWithValue }) => {
		try {
			const response = await API.fetchArticle(articleId);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);
