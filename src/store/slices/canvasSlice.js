// Redux
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	canvasElement: "",
	canvasImage: "",
	quotes: "",
	author: "",
	imageURL: "",
	fontFamily: "proxima-nova",
	fontSize: 20
};

const canvasSlice = createSlice({
	name: "canvas",
	initialState,
	reducers: {
		changeCanvas: (state, { payload }) => {
			state.canvasElement = payload;
		},
		changeCanvasImage: (state, { payload }) => {
			state.canvasImage = payload;
		},
		changeQuotes: (state, { payload }) => {
			state.quotes = payload;
		},
		changeAuthor: (state, { payload }) => {
			state.author = payload;
		},
		setImageURL: (state, { payload }) => {
			state.imageURL = payload;
		},
		setFontFamily: (state, { payload }) => {
			state.fontFamily = payload;
		},
		setFontSize: (state, { payload }) => {
			state.fontSize = payload;
		}
	}
});

export const {
	changeCanvas,
	changeCanvasImage,
	changeQuotes,
	changeAuthor,
	setImageURL,
	setFontFamily,
	setFontSize
} = canvasSlice.actions;

export default canvasSlice.reducer;
