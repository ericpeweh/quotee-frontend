// Redux
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	status: "idle",
	imageURL: "",
	imageBlur: 0,
	initialScale: 0,
	imageScale: 1,
	fontFamily: "proxima-nova",
	fontSize: 20,
	textAlign: "center",
	fontStyle: [],
	isBold: false,
	isItalic: false,
	isUnderlined: false,
	quotesFontColor: "#f3f3f3",
	authorFontColor: "#f3f3f3",
	fontCase: "default",
	hideAuthor: false,
	grayscale: false,
	sepia: false,
	oldPhoto: false,
	vintage: false,
	kodachrome: false,
	polaroid: false,
	photographer: "",
	photographerUrl: ""
};

const canvasSlice = createSlice({
	name: "canvas",
	initialState,
	reducers: {
		resetCanvas: state => {
			state.imageURL = "";
			state.imageBlur = 0;
			state.initialScale = 0;
			state.imageScale = 1;
			state.fontFamily = "proxima-nova";
			state.fontSize = 20;
			state.textAlign = "center";
			state.fontStyle = [];
			state.isBold = false;
			state.isItalic = false;
			state.isUnderlined = false;
			state.quotesFontColor = "#f3f3f3";
			state.authorFontColor = "#f3f3f3";
			state.hideAuthor = false;
			state.grayscale = false;
			state.sepia = false;
			state.oldPhoto = false;
			state.vintage = false;
			state.kodachrome = false;
			state.polaroid = false;
			state.fontCase = "default";
			state.photographer = "";
			state.photographerUrl = "";
		},
		changeStatus: (state, { payload }) => {
			state.status = payload;
		},
		imageURLChange: (state, { payload }) => {
			state.imageURL = payload;
		},
		changeImageBlur: (state, { payload }) => {
			state.imageBlur = payload;
		},
		changeImageInitialScale: (state, { payload }) => {
			state.initialScale = payload;
		},
		changeImageScale: (state, { payload }) => {
			state.imageScale = payload;
		},
		changeFontFamily: (state, { payload }) => {
			state.fontFamily = payload;
		},
		changeFontSize: (state, { payload }) => {
			state.fontSize = payload;
		},
		changeTextAlign: (state, { payload }) => {
			state.textAlign = payload;
		},
		changeFontStyle: (state, { payload }) => {
			state.fontStyle = payload;
			state.isBold = payload.includes("bold");
			state.isItalic = payload.includes("italic");
			state.isUnderlined = payload.includes("underlined");
		},
		changeQuotesFontColor: (state, { payload }) => {
			state.quotesFontColor = payload;
		},
		changeAuthorFontColor: (state, { payload }) => {
			state.authorFontColor = payload;
		},
		changeFontCase: (state, { payload }) => {
			state.fontCase = payload;
		},
		changeHideAuthor: (state, { payload }) => {
			state.hideAuthor = payload;
		},
		changeGrayscale: (state, { payload }) => {
			state.grayscale = payload;
		},
		changeSepia: (state, { payload }) => {
			state.sepia = payload;
		},
		changeOldPhoto: (state, { payload }) => {
			state.oldPhoto = payload;
		},
		changeVintage: (state, { payload }) => {
			state.vintage = payload;
		},
		changeKodachrome: (state, { payload }) => {
			state.kodachrome = payload;
		},
		changePolaroid: (state, { payload }) => {
			state.polaroid = payload;
		},
		changePhotographer: (state, { payload }) => {
			state.photographer = payload.username;
			state.photographerUrl = payload.userLink;
		},
		resetPhotographer: state => {
			state.photographer = "";
			state.photographerUrl = "";
		}
	}
});

export const {
	resetCanvas,
	changeStatus,
	imageURLChange,
	changeImageInitialScale,
	changeImageScale,
	changeImageBlur,
	changeFontFamily,
	changeFontSize,
	changeTextAlign,
	changeFontStyle,
	changeQuotesFontColor,
	changeAuthorFontColor,
	changeFontCase,
	changeHideAuthor,
	changeGrayscale,
	changeSepia,
	changeOldPhoto,
	changeVintage,
	changeKodachrome,
	changePolaroid,
	changePhotographer,
	resetPhotographer
} = canvasSlice.actions;

export default canvasSlice.reducer;
