// Redux
import { createSlice } from "@reduxjs/toolkit";

// Actions
import { subscribeNotifications, unsubscribeNotifications } from "../../actions/pwa";
import { auth } from "../../actions/auth";

const initialState = {
	installable: false,
	installed: false,
	prompt: null,
	pushNotifications: false,
	subscribeStatus: "idle",
	pushManager: null
};

const pwaSlice = createSlice({
	name: "pwa",
	initialState,
	reducers: {
		installableChange: (state, { payload }) => {
			state.installable = payload;
		},
		installedChange: (state, { payload }) => {
			state.installed = payload;
		},
		promptChange: (state, { payload }) => {
			state.prompt = payload;
		},
		pushNotificationsChange: (state, { payload }) => {
			state.pushNotifications = payload;
		},
		pushManagerChange: (state, { payload }) => {
			state.pushManager = payload;
		}
	},
	extraReducers: {
		[subscribeNotifications.fulfilled]: state => {
			state.pushNotifications = true;
			state.subscribeStatus = "succeeded";
		},
		[subscribeNotifications.pending]: state => {
			state.pushNotifications = true;
			state.subscribeStatus = "loading";
		},
		[unsubscribeNotifications.fulfilled]: state => {
			state.pushNotifications = false;
		},
		[auth.fulfilled]: (state, { payload }) => {
			state.pushNotifications = payload.allowNotifications;
		}
	}
});

export const {
	installableChange,
	installedChange,
	promptChange,
	pushNotificationsChange,
	pushManagerChange
} = pwaSlice.actions;

export default pwaSlice.reducer;
