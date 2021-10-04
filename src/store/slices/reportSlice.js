// Redux
import { createSlice } from "@reduxjs/toolkit";

// Actions
import { reportPost } from "../../actions/posts";

const initialState = {
	postId: "",
	isReportModalOpen: false,
	reportStatus: "idle",
	reportMessage: ""
};

const reportSlice = createSlice({
	name: "report",
	initialState,
	reducers: {
		reportModalChange: (state, { payload }) => {
			state.isReportModalOpen = payload;
		},
		postIdChange: (state, { payload }) => {
			state.postId = payload;
		},
		resetReport: state => {
			state.postId = "";
			state.isReportModalOpen = "";
			state.reportStatus = "idle";
			state.reportMessage = "";
		}
	},
	extraReducers: {
		[reportPost.pending]: state => {
			state.reportStatus = "loading";
		},
		[reportPost.fulfilled]: (state, { payload }) => {
			state.reportStatus = "succeeded";
			state.reportMessage = payload.message;
		},
		[reportPost.rejected]: (state, { payload }) => {
			state.reportStatus = "failed";
			state.reportMessage = payload.message;
		}
	}
});

export const { reportModalChange, postIdChange, resetReport } = reportSlice.actions;

export default reportSlice.reducer;
