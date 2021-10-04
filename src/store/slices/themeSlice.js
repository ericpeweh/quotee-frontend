// Dependencies
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	theme: localStorage.getItem("theme") === "dark" ? "dark" : "light"
};

const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		darkTheme: state => {
			state.theme = "dark";
			localStorage.setItem("theme", "dark");
		},
		lightTheme: state => {
			state.theme = "light";
			localStorage.setItem("theme", "light");
		}
	}
});

export const { darkTheme, lightTheme } = themeSlice.actions;

export default themeSlice.reducer;
