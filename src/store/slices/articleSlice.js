// Dependencies
import { createSlice } from "@reduxjs/toolkit";
import { fetchArticle } from "../../actions/articles";

const initialState = {
	articleId: "",
	articleStatus: "idle",
	articleMessage: "",
	author: "",
	title: "",
	subtitle: "",
	bannerImage: "",
	body: "",
	createdAt: ""
};

const articleSlice = createSlice({
	name: "article",
	initialState,
	reducers: {
		resetArticle: state => {
			state.articleId = "";
			state.author = "";
			state.title = "";
			state.subtitle = "";
			state.bannerImage = "";
			state.body = "";
			state.createdAt = "";
			state.articleMessage = "";
		}
	},
	extraReducers: {
		[fetchArticle.pending]: state => {
			state.articleStatus = "loading";
		},
		[fetchArticle.fulfilled]: (state, { payload }) => {
			state.articleId = payload._id;
			state.articleStatus = "succeeded";
			state.author = payload.author;
			state.title = payload.title;
			state.subtitle = payload.subtitle;
			state.bannerImage = payload.bannerImage;
			state.body = payload.body;
			state.createdAt = payload.createdAt;
			state.articleMessage = "Fetch article successfully";
		},
		[fetchArticle.rejected]: (state, { payload }) => {
			state.articleStatus = "failed";
			state.articleMessage = payload.message;
		}
	}
});

export const { resetArticle } = articleSlice.actions;

export default articleSlice.reducer;
