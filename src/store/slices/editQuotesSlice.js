// Redux
import { createSlice } from "@reduxjs/toolkit";

// Actions
import { editPost, fetchEditPost } from "../../actions/posts";

const initialState = {
	quotes: "",
	quotesIsTouched: false,
	tags: [],
	tagsIsTouched: false,
	isModalOpen: false,
	status: "idle",
	fetchPostStatus: "idle",
	message: "",
	quotesId: ""
};

const editQuotesSlice = createSlice({
	name: "editQuotes",
	initialState,
	reducers: {
		quotesChange: (state, { payload }) => {
			state.quotes = payload;
		},
		quotesBlur: state => {
			state.quotesIsTouched = true;
		},
		quotesReset: state => {
			state.quotes = "";
			state.quotesIsTouched = false;
		},
		tagsChange: (state, { payload }) => {
			state.tags = [...state.tags, payload];
		},
		tagsDelete: (state, { payload }) => {
			state.tags = state.tags.filter(tag => tag !== payload);
		},
		tagsBlur: state => {
			state.tagsIsTouched = true;
		},
		tagsReset: state => {
			state.tags = [];
			state.tagsIsTouched = false;
		},
		modalOpen: state => {
			state.isModalOpen = true;
		},
		modalClose: state => {
			state.isModalOpen = false;
		},
		statusReset: state => {
			state.status = "idle";
			state.fetchPostStatus = "idle";
		}
	},
	extraReducers: {
		[editPost.pending]: state => {
			state.status = "loading";
		},
		[editPost.fulfilled]: (state, action) => {
			state.status = "succeeded";
			state.message = action.payload.message;
		},
		[editPost.rejected]: (state, action) => {
			state.status = "failed";
			state.message = action.payload.message;
		},
		[fetchEditPost.pending]: state => {
			state.fetchPostStatus = "loading";
		},
		[fetchEditPost.fulfilled]: (state, action) => {
			state.fetchPostStatus = "succeeded";
			state.quotes = action.payload.quotes;
			state.tags = action.payload.tags;
			state.quotesId = action.payload._id;
		},
		[fetchEditPost.rejected]: (state, action) => {
			state.fetchPostStatus = "failed";
			state.message = action.payload.message;
		}
	}
});

export const {
	quotesChange,
	quotesBlur,
	quotesReset,
	tagsChange,
	tagsDelete,
	tagsBlur,
	tagsReset,
	modalOpen,
	modalClose,
	statusReset
} = editQuotesSlice.actions;

export default editQuotesSlice.reducer;
