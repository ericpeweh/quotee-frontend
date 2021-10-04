// Dependencies
import { createSlice } from "@reduxjs/toolkit";
import { fetchTopQuotes } from "../../actions/posts";
import { fetchArticles } from "../../actions/articles";
import { fetchTopUsers } from "../../actions/users";

const initialState = {
	posts: [],
	articles: [],
	topUsers: [],
	postsStatus: "idle",
	articlesStatus: "idle"
};

const socialSlice = createSlice({
	name: "social",
	initialState,
	reducers: {},
	extraReducers: {
		[fetchTopQuotes.pending]: state => {
			state.postsStatus = "loading";
		},
		[fetchTopQuotes.fulfilled]: (state, action) => {
			state.posts = action.payload;
			state.postsStatus = "succeeded";
		},
		[fetchTopQuotes.rejected]: state => {
			state.postsStatus = "failed";
		},
		[fetchArticles.pending]: state => {
			state.articlesStatus = "loading";
		},
		[fetchArticles.fulfilled]: (state, action) => {
			state.articles = action.payload;
			state.articlesStatus = "succeeded";
		},
		[fetchArticles.rejected]: state => {
			state.articlesStatus = "failed";
		},
		[fetchTopUsers.pending]: state => {
			state.topUsersStatus = "loading";
		},
		[fetchTopUsers.fulfilled]: (state, action) => {
			state.topUsers = action.payload;
			state.topUsersStatus = "succeeded";
		},
		[fetchTopUsers.rejected]: state => {
			state.topUsersStatus = "failed";
		}
	}
});

export default socialSlice.reducer;
