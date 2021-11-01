// Dependencies
import { createAsyncThunk } from "@reduxjs/toolkit";

// API to backend
import * as API from "../api/images";

// Thunk (async)
export const getImages = createAsyncThunk(
	"images/getImages",
	async (imageData, { rejectWithValue }) => {
		try {
			const response = await API.getImages(imageData);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const getMoreImages = createAsyncThunk(
	"images/getMoreImages",
	async (imageData, { rejectWithValue }) => {
		try {
			const response = await API.getImages(imageData);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const getImagesBySearch = createAsyncThunk(
	"images/getImagesBySearch",
	async (imageData, { rejectWithValue }) => {
		try {
			const response = await API.getImages(imageData);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const getMoreImagesBySearch = createAsyncThunk(
	"images/getMoreImagesBySearch",
	async (imageData, { rejectWithValue }) => {
		try {
			const response = await API.getImages(imageData);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);
