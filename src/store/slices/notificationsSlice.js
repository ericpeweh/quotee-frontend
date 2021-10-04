// Redux
import { createSlice } from "@reduxjs/toolkit";

// Actions
import { fetchNotifications } from "../../actions/users";

const initialState = {
	notifications: [],
	status: "idle",
	hasMore: false
};

const notificationsSlice = createSlice({
	name: "notifications",
	initialState,
	reducers: {},
	extraReducers: {
		[fetchNotifications.pending]: state => {
			state.status = "loading";
		},
		[fetchNotifications.fulfilled]: (state, { payload }) => {
			state.status = "succeeded";
			state.notifications = payload.notifications;
			state.hasMore = payload.hasMore;
		},
		[fetchNotifications.rejected]: state => {
			state.status = "failed";
		}
	}
});

export default notificationsSlice.reducer;
