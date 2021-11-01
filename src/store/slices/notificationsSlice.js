// Redux
import { createSlice } from "@reduxjs/toolkit";

// Actions
import { fetchNotifications, fetchMoreNotifications } from "../../actions/users";

const initialState = {
	notifications: [],
	status: "idle",
	moreNotificationsStatus: "idle",
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
		},
		[fetchMoreNotifications.pending]: state => {
			state.moreNotificationsStatus = "loading";
		},
		[fetchMoreNotifications.fulfilled]: (state, { payload }) => {
			state.moreNotificationsStatus = "succeeded";
			state.notifications.push(...payload.notifications);
			state.hasMore = payload.hasMore;
		},
		[fetchMoreNotifications.rejected]: state => {
			state.moreNotificationsStatus = "failed";
		}
	}
});

export default notificationsSlice.reducer;
