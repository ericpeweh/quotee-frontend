// Dependencies
import moment from "moment";
import {
	fetchPostsBySearchQuotes,
	fetchPostsByAdvancedSearch,
	fetchMorePostsBySearchQuotes,
	likePost
} from "../../actions/posts";

// Redux
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	posts: [],
	searchStatus: "idle",
	hasMore: false,
	searchQuery: "",
	authorQuery: "",
	tagsQuery: [],
	fromDateQuery: "01/01/2021",
	toDateQuery: moment.utc().format("DD/MM/YYYY"),
	isSearchModalOpen: false
};

const searchSlice = createSlice({
	name: "search",
	initialState,
	reducers: {
		changeSearch: (state, { payload }) => {
			state.searchQuery = payload;
		},
		changeAuthor: (state, { payload }) => {
			state.authorQuery = payload;
		},
		setTags: (state, { payload }) => {
			state.tagsQuery = payload;
		},
		changeTags: (state, { payload }) => {
			state.tagsQuery.push(payload);
		},
		deleteTags: (state, { payload }) => {
			state.tagsQuery = state.tagsQuery.filter(tag => tag !== payload);
		},
		changeFromDate: (state, { payload }) => {
			state.fromDateQuery = payload;
		},
		changeToDate: (state, { payload }) => {
			state.toDateQuery = payload;
		},
		resetSearch: state => {
			state.searchQuery = "";
			state.authorQuery = "";
			state.tagsQuery = [];
			state.authorQuery = "";
			state.fromDateQuery = "01/01/2021";
			state.toDateQuery = moment.utc().format("DD/MM/YYYY");
		},
		closeSearchModal: state => {
			state.isSearchModalOpen = false;
		},
		openSearchModal: state => {
			state.isSearchModalOpen = true;
		}
	},
	extraReducers: {
		[fetchPostsBySearchQuotes.pending]: state => {
			state.searchStatus = "loading";
		},
		[fetchPostsBySearchQuotes.fulfilled]: (state, action) => {
			state.searchStatus = "succeeded";
			state.posts = action.payload.posts;
			state.hasMore = action.payload.hasMore;
		},
		[fetchPostsBySearchQuotes.rejected]: state => {
			state.searchStatus = "failed";
		},
		[fetchPostsByAdvancedSearch.pending]: state => {
			state.searchStatus = "loading";
		},
		[fetchPostsByAdvancedSearch.fulfilled]: (state, action) => {
			state.searchStatus = "succeeded";
			state.posts = action.payload.posts;
			state.hasMore = action.payload.hasMore;
		},
		[fetchPostsByAdvancedSearch.rejected]: state => {
			state.searchStatus = "failed";
		},
		[fetchMorePostsBySearchQuotes.fulfilled]: (state, action) => {
			state.searchStatus = "succeeded";
			state.posts.push(...action.payload.posts);
			state.hasMore = action.payload.hasMore;
		},
		[likePost.fulfilled]: (state, action) => {
			state.posts = state.posts.map(post =>
				post._id === action.payload.updatedPost._id
					? { ...action.payload.updatedPost, profilePicture: post.profilePicture }
					: post
			);
		}
	}
});

export const {
	resetSearch,
	changeSearch,
	changeAuthor,
	changeTags,
	setTags,
	deleteTags,
	changeFromDate,
	changeToDate,
	searchQuery,
	closeSearchModal,
	openSearchModal
} = searchSlice.actions;

export default searchSlice.reducer;
