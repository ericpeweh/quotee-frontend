// Redux
import { createSlice } from "@reduxjs/toolkit";
import { fetchShareQuotes } from "../../actions/share";

const initialState = {
	quotesId: "",
	quotes: "",
	author: "",
	isShareModalOpen: false,
	status: "idle"
};

const shareQuotesSlice = createSlice({
	name: "shareQuotes",
	initialState,
	reducers: {
		setSharePost: (state, { payload }) => {
			state.quotesId = payload.quotesId;
			state.quotes = payload.quotes;
			state.author = payload.author;
		},
		resetSharePost: state => {
			state.quotesId = "";
			state.quotes = "";
			state.author = "";
		},
		openShareModal: state => {
			state.isShareModalOpen = true;
		},
		closeShareModal: state => {
			state.isShareModalOpen = false;
		}
	},
	extraReducers: {
		[fetchShareQuotes.pending]: state => {
			state.status = "loading";
		},
		[fetchShareQuotes.fulfilled]: (state, action) => {
			state.status = "succeeded";
			state.quotes = action.payload.quotes;
			state.author = action.payload.author;
		},
		[fetchShareQuotes.rejected]: state => {
			state.status = "failed";
		}
	}
});

export const { setSharePost, resetSharePost, openShareModal, closeShareModal } =
	shareQuotesSlice.actions;

export default shareQuotesSlice.reducer;
