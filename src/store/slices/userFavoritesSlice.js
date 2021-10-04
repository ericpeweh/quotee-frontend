// Dependencies
import { createSlice } from "@reduxjs/toolkit";
import { fetchUserFavorites } from "../../actions/users";
import { favoritePost } from "../../actions/posts";

const initialState = {
	posts: [],
	status: "idle"
};

const userFavoritesSlice = createSlice({
	name: "userFavorites",
	initialState,
	reducers: {},
	extraReducers: {
		[fetchUserFavorites.pending]: state => {
			state.status = "loading";
		},
		[fetchUserFavorites.fulfilled]: (state, action) => {
			state.posts = action.payload;
			state.status = "succeeded";
		},
		[fetchUserFavorites.rejected]: state => {
			state.status = "failed";
		},
		[favoritePost.fulfilled]: (state, action) => {
			state.posts = action.payload.newFavorites;
		}
	}
});

export default userFavoritesSlice.reducer;
