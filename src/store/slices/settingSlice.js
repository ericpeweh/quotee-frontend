// Dependencies
import { createSlice } from "@reduxjs/toolkit";
import {
	fetchSettings,
	updateUserProfile,
	changePassword,
	changeProfilePicture,
	deleteProfilePicture
} from "../../actions/users";

const initialState = {
	username: "",
	fullName: "",
	profilePicture: "",
	email: "",
	description: "",
	phoneNumber: "",
	status: "idle",
	updateProfileStatus: "idle",
	isModalOpen: false,
	modalMessage: "",
	currentPassword: "",
	newPassword: "",
	newPasswordConfirm: "",
	showPassword: false,
	changePasswordStatus: "idle",
	changePictureStatus: "idle"
};

const settingSlice = createSlice({
	name: "settings",
	initialState,
	reducers: {
		fullNameChange: (state, { payload }) => {
			state.fullName = payload;
		},
		descriptionChange: (state, { payload }) => {
			state.description = payload;
		},
		phoneNumberChange: (state, { payload }) => {
			state.phoneNumber = payload;
		},
		currentPasswordChange: (state, { payload }) => {
			state.currentPassword = payload;
		},
		newPasswordChange: (state, { payload }) => {
			state.newPassword = payload;
		},
		newPasswordConfirmChange: (state, { payload }) => {
			state.newPasswordConfirm = payload;
		},
		showPasswordChange: state => {
			state.showPassword = !state.showPassword;
		},
		closeModal: state => {
			state.isModalOpen = false;
		},
		openModal: state => {
			state.isModalOpen = true;
		},
		resetUpdate: state => {
			state.modalMessage = "";
			state.showPassword = false;
			state.updateProfileStatus = "idle";
			state.changePasswordStatus = "idle";
			state.changePictureStatus = "idle";
		}
	},
	extraReducers: {
		[fetchSettings.pending]: state => {
			state.status = "loading";
		},
		[fetchSettings.fulfilled]: (state, action) => {
			state.fullName = action.payload.fullName;
			state.email = action.payload.email;
			state.description = action.payload.description;
			state.phoneNumber = action.payload.phoneNumber;
			state.profilePicture = action.payload.profilePicture;
			state.status = "succeeded";
		},
		[fetchSettings.rejected]: state => {
			state.status = "failed";
		},
		[updateUserProfile.pending]: state => {
			state.updateProfileStatus = "loading";
		},
		[updateUserProfile.fulfilled]: (state, action) => {
			state.fullName = action.payload.fullName;
			state.description = action.payload.description;
			state.phoneNumber = action.payload.phoneNumber;
			state.updateProfileStatus = "succeeded";
			state.modalMessage = action.payload.message;
		},
		[updateUserProfile.rejected]: (state, action) => {
			state.updateProfileStatus = "failed";
			state.modalMessage = action.payload.message;
		},
		[changePassword.pending]: state => {
			state.changePasswordStatus = "loading";
		},
		[changePassword.fulfilled]: (state, action) => {
			state.changePasswordStatus = "succeeded";
			state.modalMessage = action.payload.message;
			state.currentPassword = "";
			state.newPassword = "";
			state.newPasswordConfirm = "";
		},
		[changePassword.rejected]: (state, action) => {
			state.changePasswordStatus = "failed";
			state.modalMessage = action.payload.message;
		},
		[changeProfilePicture.pending]: state => {
			state.changePictureStatus = "loading";
		},
		[changeProfilePicture.fulfilled]: (state, action) => {
			state.changePictureStatus = "succeeded";
			state.profilePicture = action.payload.profilePicture;
		},
		[changeProfilePicture.rejected]: state => {
			state.changePictureStatus = "failed";
		},
		[deleteProfilePicture.pending]: state => {
			state.changePictureStatus = "loading";
		},
		[deleteProfilePicture.fulfilled]: (state, action) => {
			state.changePictureStatus = "succeeded";
			state.profilePicture = action.payload.profilePicture;
		},
		[deleteProfilePicture.rejected]: state => {
			state.changePictureStatus = "failed";
		}
	}
});

export const {
	fullNameChange,
	descriptionChange,
	phoneNumberChange,
	showPasswordChange,
	currentPasswordChange,
	newPasswordChange,
	newPasswordConfirmChange,
	closeModal,
	openModal,
	resetUpdate
} = settingSlice.actions;

export default settingSlice.reducer;
