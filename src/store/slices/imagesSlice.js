// Dependencies
import { createSlice } from "@reduxjs/toolkit";
import {
	getImages,
	getMoreImages,
	getImagesBySearch,
	getMoreImagesBySearch
} from "../../actions/images";

const initialState = {
	images: [],
	status: "idle",
	hasMore: false,
	getMoreImagesStatus: "idle",
	searchQuery: "",
	searchStatus: "idle",
	getMoreImagesBySearchStatus: "idle"
};

const imagesSlice = createSlice({
	name: "images",
	initialState,
	reducers: {
		changeSearchQuery: (state, { payload }) => {
			state.searchQuery = payload;
		}
	},
	extraReducers: {
		[getImages.pending]: state => {
			state.status = "loading";
		},
		[getImages.fulfilled]: (state, { payload }) => {
			state.status = "succeeded";
			state.images = payload.images;
			state.hasMore = payload.hasMore;
		},
		[getImages.rejected]: state => {
			state.status = "failed";
		},
		[getMoreImages.pending]: state => {
			state.getMoreImagesStatus = "loading";
		},
		[getMoreImages.fulfilled]: (state, { payload }) => {
			state.getMoreImagesStatus = "succeeded";
			state.images.push(...payload.images);
			state.hasMore = payload.hasMore && state.images.length < 150 ? true : false;
		},
		[getMoreImages.rejected]: state => {
			state.getMoreImagesStatus = "failed";
		},
		[getImagesBySearch.pending]: state => {
			state.searchStatus = "loading";
		},
		[getImagesBySearch.fulfilled]: (state, { payload }) => {
			state.searchStatus = "succeeded";
			state.images = payload.images;
			state.hasMore = payload.hasMore && state.images.length < 150 ? true : false;
		},
		[getImagesBySearch.rejected]: state => {
			state.searchStatus = "failed";
		},
		[getMoreImagesBySearch.pending]: state => {
			state.getMoreImagesBySearchStatus = "loading";
		},
		[getMoreImagesBySearch.fulfilled]: (state, { payload }) => {
			state.getMoreImagesBySearchStatus = "succeeded";
			state.images.push(...payload.images);
			state.hasMore = payload.hasMore && state.images.length < 150 ? true : false;
		},
		[getMoreImagesBySearch.rejected]: state => {
			state.getMoreImagesBySearchStatus = "failed";
		}
	}
});

export const { changeSearchQuery } = imagesSlice.actions;

export default imagesSlice.reducer;
