// Dependencies
import { createSlice } from "@reduxjs/toolkit";
import { resetPassword } from "../../actions/users";

const initialState = {
	password: "",
	passwordConfirm: "",
	message: "",
	status: "idle",
	isModalOpen: false,
	showPassword: false
};

const resetPasswordSlice = createSlice({
	name: "resetPassword",
	initialState,
	reducers: {
		passwordChange: (state, { payload }) => {
			state.password = payload;
		},
		passwordConfirmChange: (state, { payload }) => {
			state.passwordConfirm = payload;
		},
		modalChange: (state, { payload }) => {
			state.isModalOpen = payload;
			state.message = payload === false ? "" : state.message;
		},
		showPasswordChange: state => {
			state.showPassword = !state.showPassword;
		}
	},
	extraReducers: {
		[resetPassword.pending]: state => {
			state.status = "loading";
		},
		[resetPassword.fulfilled]: (state, { payload }) => {
			state.message = payload.message;
			state.status = "succeeded";
		},
		[resetPassword.rejected]: (state, { payload }) => {
			state.message = payload.message;
			state.status = "failed";
		}
	}
});

export const { passwordChange, passwordConfirmChange, modalChange, showPasswordChange } =
	resetPasswordSlice.actions;

export default resetPasswordSlice.reducer;
