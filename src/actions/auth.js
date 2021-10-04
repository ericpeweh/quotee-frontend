// Dependencies
import { createAsyncThunk } from "@reduxjs/toolkit";

// API to backend
import * as API from "../api/auth";

// Thunk (async)
export const auth = createAsyncThunk("auth/auth", async (payload, { rejectWithValue }) => {
	try {
		const response = await API.auth();
		return response.data;
	} catch (error) {
		return rejectWithValue(error.response.data);
	}
});

export const signOut = createAsyncThunk("auth/signOut", async (payload, { rejectWithValue }) => {
	try {
		const response = await API.signOut();
		return response.data;
	} catch (error) {
		return rejectWithValue(error.response.data);
	}
});
