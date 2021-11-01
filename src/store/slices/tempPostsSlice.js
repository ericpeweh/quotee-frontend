// Dependencies
import { createSlice } from "@reduxjs/toolkit";

// Actions
import { fetchTempPosts } from "../../actions/posts";

const initialState = {
	tempPosts: [],
	status: "idle"
};

const tempPostsSlice = createSlice({
	name: "tempPosts",
	initialState,
	extraReducers: {
		[fetchTempPosts.fulfilled]: (state, { payload }) => {
			state.tempPosts = payload.posts;
		}
	}
});

export default tempPostsSlice.reducer;
