// Dependencies
import { createSlice } from "@reduxjs/toolkit";
import {
	fetchUserProfile,
	fetchUserPosts,
	fetchMoreUserPosts,
	searchUserPosts,
	followUser,
	fetchPopulatedFollowers,
	fetchPopulatedFollowing,
	fetchMorePopulatedFollowers,
	fetchMorePopulatedFollowing,
	searchPopulatedFollowers,
	searchPopulatedFollowing
} from "../../actions/users";
import { likePost, deletePost } from "../../actions/posts";

const initialState = {
	userId: "",
	username: "",
	profilePicture: "",
	fullName: "",
	description: "",
	followers: [],
	following: [],
	populatedFollowers: [],
	populatedFollowing: [],
	populateFollowersStatus: "idle",
	populateFollowingStatus: "idle",
	fetchMorePopulateFollowingStatus: "idle",
	fetchMorePopulateFollowersStatus: "idle",
	hasMoreFollowers: false,
	hasMoreFollowing: false,
	followerAndFollowingQuery: "",
	postAmount: 0,
	status: "idle",
	profileMessage: "",
	isProfileModalOpen: false,
	whichModal: "",
	posts: [],
	hasMorePosts: false,
	postStatus: "idle",
	postSearchQuery: "",
	postSearchStatus: "idle"
};

const userProfileSlice = createSlice({
	name: "userProfile",
	initialState,
	reducers: {
		resetUserProfile: state => {
			state.userId = "";
			state.username = "";
			state.fullName = "";
			state.description = "";
			state.profilePicture = "";
			state.followers = [];
			state.following = [];
			state.populatedFollowers = [];
			state.populatedFollowing = [];
			state.populateFollowersStatus = "idle";
			state.populateFollowingStatus = "idle";
			state.fetchMorePopulateFollowersStatus = "idle";
			state.fetchMorePopulateFollowingStatus = "idle";
			state.hasMoreFollowers = false;
			state.hasMoreFollowing = false;
			state.posts = [];
			state.postAmount = 0;
			state.postStatus = state.postStatus === "loading" ? "loading" : "idle";
			state.status = "idle";
			state.profileMessage = "";
			state.isProfileModalOpen = false;
			state.whichModal = "";
			state.postSearchQuery = "";
			state.postSearchStatus = "idle";
		},
		closeModal: state => {
			state.isProfileModalOpen = false;
		},
		openModal: state => {
			state.isProfileModalOpen = true;
		},
		changeWhichModal: (state, { payload }) => {
			state.whichModal = payload;
			state.followerAndFollowingQuery = "";
		},
		followerAndFollowingQueryChange: (state, { payload }) => {
			state.followerAndFollowingQuery = payload;
		},
		postSearchQueryChange: (state, { payload }) => {
			state.postSearchQuery = payload;
		}
	},
	extraReducers: {
		[fetchUserProfile.pending]: (state, action) => {
			state.status = "loading";
		},
		[fetchUserProfile.fulfilled]: (state, action) => {
			state.status = "succeeded";
			state.userId = action.payload.userId;
			state.username = action.payload.username;
			state.fullName = action.payload.fullName;
			state.profilePicture = action.payload.profilePicture;
			state.description = action.payload.description;
			state.followers = action.payload.followers;
			state.following = action.payload.following;
			state.postAmount = action.payload.postAmount;
		},
		[fetchUserProfile.rejected]: (state, { payload }) => {
			state.status = "failed";
			state.profileMessage = payload.message;
		},
		[fetchUserPosts.pending]: state => {
			state.postStatus = "loading";
		},
		[fetchUserPosts.fulfilled]: (state, action) => {
			state.postStatus = "succeeded";
			state.posts = action.payload.posts;
			state.hasMorePosts = action.payload.hasMore;
		},
		[fetchUserPosts.rejected]: state => {
			state.postStatus = "failed";
		},
		[fetchMoreUserPosts.pending]: state => {
			state.postStatus = "loading";
		},
		[fetchMoreUserPosts.fulfilled]: (state, action) => {
			state.postStatus = "succeeded";
			state.posts = action.payload.posts;
			state.hasMorePosts = action.payload.hasMore;
		},
		[fetchMoreUserPosts.rejected]: state => {
			state.postStatus = "failed";
		},
		[searchUserPosts.pending]: state => {
			state.postStatus = "loading";
			state.postSearchStatus = "loading";
		},
		[searchUserPosts.fulfilled]: (state, action) => {
			state.postStatus = "succeeded";
			state.posts = action.payload.posts;
			state.postSearchStatus = "succeeded";
		},
		[searchUserPosts.rejected]: state => {
			state.postStatus = "failed";
			state.postSearchStatus = "failed";
		},
		[likePost.fulfilled]: (state, action) => {
			state.posts = state.posts.map(post =>
				post._id === action.payload._id
					? { ...action.payload, profilePicture: post.profilePicture }
					: post
			);
		},
		[followUser.fulfilled]: (state, action) => {
			state.followers = action.payload.followers;
		},
		[fetchPopulatedFollowing.pending]: state => {
			state.populateFollowingStatus = "loading";
		},
		[fetchPopulatedFollowing.fulfilled]: (state, action) => {
			state.populateFollowingStatus = "succeeded";
			state.populatedFollowing = action.payload.following;
			state.hasMoreFollowing = action.payload.hasMore;
		},
		[fetchPopulatedFollowing.rejected]: state => {
			state.populateFollowingStatus = "failed";
		},
		[fetchPopulatedFollowers.pending]: state => {
			state.populateFollowersStatus = "loading";
		},
		[fetchPopulatedFollowers.fulfilled]: (state, action) => {
			state.populateFollowersStatus = "succeeded";
			state.populatedFollowers = action.payload.followers;
			state.hasMoreFollowers = action.payload.hasMore;
		},
		[fetchPopulatedFollowers.rejected]: state => {
			state.populateFollowersStatus = "failed";
		},
		[fetchMorePopulatedFollowing.pending]: state => {
			state.fetchMorePopulateFollowingStatus = "loading";
		},
		[fetchMorePopulatedFollowing.fulfilled]: (state, action) => {
			state.fetchMorePopulateFollowingStatus = "succeeded";
			state.populatedFollowing.push(...action.payload.following);
			state.hasMoreFollowing = action.payload.hasMore;
		},
		[fetchMorePopulatedFollowing.rejected]: state => {
			state.fetchMorePopulateFollowingStatus = "failed";
		},
		[fetchMorePopulatedFollowers.pending]: state => {
			state.fetchMorePopulateFollowersStatus = "loading";
		},
		[fetchMorePopulatedFollowers.fulfilled]: (state, action) => {
			state.fetchMorePopulateFollowersStatus = "succeeded";
			state.populatedFollowers.push(...action.payload.followers);
			state.hasMoreFollowers = action.payload.hasMore;
		},
		[fetchMorePopulatedFollowers.rejected]: state => {
			state.fetchMorePopulateFollowersStatus = "failed";
		},
		[searchPopulatedFollowing.pending]: state => {
			state.populateFollowingStatus = "loading";
		},
		[searchPopulatedFollowing.fulfilled]: (state, action) => {
			state.populateFollowingStatus = "succeeded";
			state.populatedFollowing = action.payload;
		},
		[searchPopulatedFollowing.rejected]: state => {
			state.populateFollowingStatus = "failed";
		},
		[searchPopulatedFollowers.pending]: state => {
			state.populateFollowersStatus = "loading";
		},
		[searchPopulatedFollowers.fulfilled]: (state, action) => {
			state.populateFollowersStatus = "succeeded";
			state.populatedFollowers = action.payload;
		},
		[searchPopulatedFollowers.rejected]: state => {
			state.populateFollowersStatus = "failed";
		},
		[deletePost.fulfilled]: (state, action) => {
			state.posts = state.posts.filter(post => post._id !== action.payload.postId);
		}
	}
});

export const {
	resetUserProfile,
	closeModal,
	openModal,
	changeWhichModal,
	followerAndFollowingQueryChange,
	postSearchQueryChange
} = userProfileSlice.actions;

export default userProfileSlice.reducer;
