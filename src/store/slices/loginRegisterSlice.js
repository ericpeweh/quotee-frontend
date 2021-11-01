// Redux
import { createSlice } from "@reduxjs/toolkit";

// Actions
import { signUp, signIn, requestResetPassword } from "../../actions/users";

const initialState = {
	// Form
	firstName: "",
	lastName: "",
	username: "",
	email: "",
	password: "",
	passwordConfirm: "",
	showPassword: false,
	status: "idle",
	message: "",
	isModalOpen: false,
	redirect: "",
	resetPassword: false,
	resetPasswordStatus: "idle",
	resetPasswordMessage: "",
	isResetPasswordModal: false
};

const loginRegisterSlice = createSlice({
	name: "loginRegister",
	initialState,
	reducers: {
		firstNameChange: (state, { payload }) => {
			state.firstName = payload;
		},
		lastNameChange: (state, { payload }) => {
			state.lastName = payload;
		},
		usernameChange: (state, { payload }) => {
			state.username = payload;
		},
		emailChange: (state, { payload }) => {
			state.email = payload;
		},
		passwordChange: (state, { payload }) => {
			state.password = payload;
		},
		passwordConfirmChange: (state, { payload }) => {
			state.passwordConfirm = payload;
		},
		showPasswordChange: state => {
			state.showPassword = !state.showPassword;
		},
		modalOpen: state => {
			state.isModalOpen = true;
		},
		modalClose: state => {
			state.isModalOpen = false;
			state.message = "";
			state.status = "idle";
		},
		resetModal: state => {
			state.message = "";
			state.status = "idle";
			state.isModalOpen = false;
		},
		resetPasswordChange: (state, { payload }) => {
			state.resetPassword = payload;
		},
		resetPasswordModalChange: (state, { payload }) => {
			state.isResetPasswordModal = payload;
		}
	},
	extraReducers: {
		// Sign up / register
		[signUp.pending]: state => {
			state.status = "loading";
		},
		[signUp.fulfilled]: (state, action) => {
			state.status = "succeeded";
			state.message = action.payload.message;
			state.firstName = "";
			state.lastName = "";
			state.username = "";
			state.email = "";
			state.password = "";
			state.passwordConfirm = "";
			state.showPassword = false;
			state.redirect = "";
		},
		[signUp.rejected]: (state, action) => {
			state.status = "failed";
			state.message = action.payload.message;
		},
		// Sign in / login
		[signIn.pending]: state => {
			state.status = "loading";
		},
		[signIn.fulfilled]: (state, action) => {
			state.status = "succeeded";
			state.message = action.payload.message;
			state.firstName = "";
			state.lastName = "";
			state.username = "";
			state.email = "";
			state.password = "";
			state.passwordConfirm = "";
			state.showPassword = false;
			state.redirect = true;
			localStorage.setItem("jwt", action.payload.token);
		},
		[signIn.rejected]: (state, action) => {
			state.status = "failed";
			state.redirect = false;
			state.message = action.payload.message;
		},
		// Reset password
		[requestResetPassword.pending]: state => {
			state.resetPasswordStatus = "loading";
		},
		[requestResetPassword.fulfilled]: (state, action) => {
			state.resetPasswordStatus = "succeeded";
			state.resetPasswordMessage = action.payload.message;
		},
		[requestResetPassword.rejected]: (state, action) => {
			state.resetPasswordStatus = "failed";
			state.resetPasswordMessage = action.payload.message;
		}
	}
});

export const {
	firstNameChange,
	lastNameChange,
	usernameChange,
	emailChange,
	passwordChange,
	passwordConfirmChange,
	showPasswordChange,
	resetForm,
	modalOpen,
	modalClose,
	resetModal,
	resetPasswordChange,
	resetPasswordModalChange
} = loginRegisterSlice.actions;

export default loginRegisterSlice.reducer;
