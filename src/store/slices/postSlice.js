// Dependencies
import { createSlice } from "@reduxjs/toolkit";
import { fetchPost, likePost } from "../../actions/posts";

const initialState = {
	post: null,
	status: "idle",
	postMessage: ""
};

const postSlice = createSlice({
	name: "post",
	initialState,
	reducers: {
		resetPost: state => {
			state.post = null;
			state.status = "idle";
			state.postMessage = "";
		}
	},
	extraReducers: {
		[fetchPost.pending]: state => {
			state.status = "loading";
		},
		[fetchPost.fulfilled]: (state, { payload }) => {
			state.status = "succeeded";
			state.post = payload;
			state.postMessage = "Post successfully retrieved.";
		},
		[fetchPost.rejected]: (state, { payload }) => {
			state.status = "failed";
			state.postMessage = payload.message;
		},
		[likePost.fulfilled]: (state, { payload }) => {
			state.post = payload;
		}
	}
});

export const { resetPost } = postSlice.actions;

export default postSlice.reducer;
