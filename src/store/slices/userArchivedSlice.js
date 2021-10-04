// Dependencies
import { createSlice } from "@reduxjs/toolkit";
import { fetchUserArchived } from "../../actions/users";
import { unarchivePost } from "../../actions/posts";

const initialState = {
	posts: [],
	status: "idle"
};

const userArchivedSlice = createSlice({
	name: "userArchived",
	initialState,
	reducers: {},
	extraReducers: {
		[fetchUserArchived.pending]: state => {
			state.status = "loading";
		},
		[fetchUserArchived.fulfilled]: (state, action) => {
			state.posts = action.payload;
			state.status = "succeeded";
		},
		[fetchUserArchived.rejected]: state => {
			state.status = "failed";
		},
		[unarchivePost.fulfilled]: (state, action) => {
			state.posts = action.payload;
		}
	}
});

export default userArchivedSlice.reducer;
