// Dependencies
import { createAsyncThunk } from "@reduxjs/toolkit";

// API to backend
import * as API from "../api/pwa";

// Thunk (async)
export const subscribeNotifications = createAsyncThunk(
	"pwa/subscribeNotifications",
	async (subscriptionData, { rejectWithValue }) => {
		try {
			const response = await API.subscribeNotifications(subscriptionData);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const unsubscribeNotifications = createAsyncThunk(
	"pwa/unsubscribeNotifications",
	async (payload, { rejectWithValue }) => {
		try {
			const response = await API.unsubscribeNotifications();
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);
