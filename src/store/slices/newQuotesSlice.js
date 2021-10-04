// Redux
import { createSlice } from "@reduxjs/toolkit";

// Actions
import { createPost } from "../../actions/posts";

const initialState = {
	quotes: "",
	quotesIsTouched: false,
	tags: [],
	tagsIsTouched: false,
	isModalOpen: false,
	status: "idle",
	message: "",
	username: "", // For display
	author: "", // For redirect
	quotesId: ""
};

const newQuotesSlice = createSlice({
	name: "newQuotes",
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
		}
	},
	extraReducers: {
		[createPost.pending]: state => {
			state.status = "loading";
		},
		[createPost.fulfilled]: (state, action) => {
			state.status = "succeeded";
			state.message = action.payload.message;
			state.quotesId = action.payload.postId;
			state.author = action.payload.author;
		},
		[createPost.rejected]: (state, action) => {
			state.status = "failed";
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
	modalClose
} = newQuotesSlice.actions;

export default newQuotesSlice.reducer;
