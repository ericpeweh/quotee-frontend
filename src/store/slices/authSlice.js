// Dependencies
import { createSlice } from "@reduxjs/toolkit";

// Actions
import { auth, signOut } from "../../actions/auth";
import { changeProfilePicture, deleteProfilePicture, followUser } from "../../actions/users";
import { favoritePost, archivePost, unarchivePost } from "../../actions/posts";

const initialState = {
	isLoggedIn: false,
	username: "",
	fullName: "",
	userId: "",
	profileImage: "",
	isLoading: true,
	status: "idle",
	signOutStatus: "idle",
	signOutLoading: false,
	allowNotifications: false,
	favoritedPosts: [],
	archivedPosts: [],
	followers: [],
	following: []
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		signOutReset: state => {
			state.signOutStatus = "idle";
			state.signOutLoading = false;
		}
	},
	extraReducers: {
		[auth.pending]: state => {
			state.status = "loading";
			state.isLoading = true;
		},
		[auth.fulfilled]: (state, action) => {
			state.status = "succeeded";
			state.message = action.payload.message;
			state.username = action.payload.username;
			state.userId = action.payload.userId;
			state.fullName = action.payload.fullName;
			state.profilePicture = action.payload.profilePicture;
			state.favoritedPosts = action.payload.favoritedPosts;
			state.archivedPosts = action.payload.archivedPosts;
			state.followers = action.payload.followers;
			state.following = action.payload.following;
			state.isLoggedIn = true;
			state.isLoading = false;
		},
		[auth.rejected]: state => {
			state.status = "failed";
			state.isLoggedIn = false;
			state.isLoading = false;
		},
		[signOut.pending]: state => {
			state.signOutStatus = "loading";
			state.signOutLoading = true;
		},
		[signOut.fulfilled]: state => {
			state.signOutStatus = "succeeded";
			state.message = "";
			state.username = "";
			state.userId = "";
			state.fullName = "";
			state.profileImage = "";
			state.isLoggedIn = false;
			state.signOutLoading = false;
			state.favoritedPosts = [];
			state.archivedPosts = [];
			state.followers = [];
			state.following = [];
		},
		[signOut.rejected]: state => {
			state.signOutStatus = "failed";
			state.signOutLoading = false;
		},
		[changeProfilePicture.fulfilled]: (state, action) => {
			state.profilePicture = action.payload.profilePicture;
		},
		[deleteProfilePicture.fulfilled]: (state, action) => {
			state.profilePicture = action.payload.profilePicture;
		},
		[favoritePost.fulfilled]: (state, action) => {
			state.favoritedPosts = action.payload.updatedFavorites;
		},
		[followUser.fulfilled]: (state, action) => {
			state.following = action.payload.following;
		},
		[archivePost.fulfilled]: (state, { payload }) => {
			state.archivedPosts = payload.archivedPosts;
		},
		[unarchivePost.fulfilled]: (state, action) => {
			state.archivedPosts = action.payload;
		}
	}
});

export const { signOutReset } = authSlice.actions;

export default authSlice.reducer;
