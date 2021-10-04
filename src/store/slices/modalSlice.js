// Dependencies
import { createSlice } from "@reduxjs/toolkit";
import { fetchLikes, searchLikes, fetchMoreLikes } from "../../actions/posts";

const initialState = {
	isSnackbarOpen: false,
	snackbarMessage: "",
	isLikeModalOpen: false,
	likeStatus: "idle",
	fetchMoreLikeStatus: "idle",
	likeSearchQuery: "",
	isConfirmationModalOpen: false,
	confirmationPostId: "",
	postId: "",
	likes: [],
	hasMoreLikes: false,
	isAdsCarouselOpen: false,
	adsCarouselTitle: "",
	adsCarouselText: "",
	adsCarouselImage: "",
	adsCarouselUrl: ""
};

const modalSlice = createSlice({
	name: "modal",
	initialState,
	reducers: {
		snackbarChange: (state, { payload }) => {
			state.isSnackbarOpen = payload;
		},
		snackbarMessageChange: (state, { payload }) => {
			state.snackbarMessage = payload;
		},
		likeModalChange: (state, { payload }) => {
			state.isLikeModalOpen = payload;
		},
		likeModalPostId: (state, { payload }) => {
			state.postId = payload;
		},
		likeSearchQueryChange: (state, { payload }) => {
			state.likeSearchQuery = payload;
		},
		confirmationChange: (state, { payload }) => {
			state.isConfirmationModalOpen = payload;
		},
		confirmationPostIdChange: (state, { payload }) => {
			state.confirmationPostId = payload;
		},
		resetLike: state => {
			state.likeStatus = "idle";
			state.fetchMoreLikeStatus = "idle";
			state.likes = [];
			state.postId = "";
			state.likeSearchQuery = "";
		},
		adsCarouselChange: (state, { payload }) => {
			state.isAdsCarouselOpen = payload;
		},
		setCarousel: (state, { payload }) => {
			state.adsCarouselText = payload.text;
			state.adsCarouselImage = payload.image;
			state.adsCarouselTitle = payload.title;
			state.adsCarouselUrl = payload.url;
		}
	},
	extraReducers: {
		[fetchLikes.pending]: state => {
			state.likeStatus = "loading";
		},
		[fetchLikes.fulfilled]: (state, action) => {
			state.likeStatus = "succeeded";
			state.likes = action.payload.likes;
			state.hasMoreLikes = action.payload.hasMore;
		},
		[fetchLikes.rejected]: state => {
			state.likeStatus = "failed";
		},
		[fetchMoreLikes.pending]: state => {
			state.fetchMoreLikeStatus = "loading";
		},
		[fetchMoreLikes.fulfilled]: (state, action) => {
			state.fetchMoreLikeStatus = "succeeded";
			state.likes.push(...action.payload.likes);
			state.hasMoreLikes = action.payload.hasMore;
		},
		[fetchMoreLikes.rejected]: state => {
			state.fetchMoreLikeStatus = "failed";
		},
		[searchLikes.pending]: state => {
			state.likeStatus = "loading";
		},
		[searchLikes.fulfilled]: (state, action) => {
			state.likeStatus = "succeeded";
			state.likes = action.payload.likes;
		},
		[searchLikes.rejected]: state => {
			state.likeStatus = "failed";
		}
	}
});

export const {
	snackbarChange,
	snackbarMessageChange,
	confirmationChange,
	confirmationPostIdChange,
	likeModalChange,
	likeModalPostId,
	likeSearchQueryChange,
	resetLike,
	adsCarouselChange,
	setCarousel
} = modalSlice.actions;

export default modalSlice.reducer;
