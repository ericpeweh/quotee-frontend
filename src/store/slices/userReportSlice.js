// Redux
import { createSlice } from "@reduxjs/toolkit";

// Actions
import { reportUser } from "../../actions/users";

const initialState = {
	username: "",
	isReportModalOpen: false,
	reportStatus: "idle",
	reportMessage: "",
	code: "",
	description: ""
};

const userReportSlice = createSlice({
	name: "userReport",
	initialState,
	reducers: {
		reportModalChange: (state, { payload }) => {
			state.isReportModalOpen = payload;
		},
		usernameChange: (state, { payload }) => {
			state.username = payload;
		},
		resetReport: state => {
			state.username = "";
			state.isReportModalOpen = "";
			state.reportStatus = "idle";
			state.reportMessage = "";
			state.code = "";
			state.description = "";
		},
		selectCode: (state, { payload }) => {
			state.code = payload;
		},
		descriptionChange: (state, { payload }) => {
			state.description = payload;
		}
	},
	extraReducers: {
		[reportUser.pending]: state => {
			state.reportStatus = "loading";
		},
		[reportUser.fulfilled]: (state, { payload }) => {
			state.reportStatus = "succeeded";
			state.reportMessage = payload.message;
		},
		[reportUser.rejected]: (state, { payload }) => {
			state.reportStatus = "failed";
			state.reportMessage = payload.message;
		}
	}
});

export const { reportModalChange, usernameChange, resetReport, selectCode, descriptionChange } =
	userReportSlice.actions;

export default userReportSlice.reducer;
