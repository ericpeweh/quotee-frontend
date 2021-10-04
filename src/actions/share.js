// Dependencies
import { createAsyncThunk } from "@reduxjs/toolkit";

// Api to backend
import * as API from "../api/posts";

export const fetchShareQuotes = createAsyncThunk(
	"shareQuotes/fetchShareQuotes",
	async (postId, { rejectWithValue }) => {
		try {
			const response = await API.fetchPost(postId);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);
