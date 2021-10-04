// Dependencies
import { createSlice } from "@reduxjs/toolkit";

// Actions
import { fetchPosts, likePost, deletePost, fetchMorePosts, archivePost } from "../../actions/posts";

const initialState = {
	posts: [],
	status: "idle",
	error: "",
	fetchMorePostsStatus: "idle",
	hasMorePosts: false
};

const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {},
	extraReducers: {
		[fetchPosts.pending]: state => {
			state.status = "loading";
		},
		[fetchPosts.fulfilled]: (state, action) => {
			state.status = "succeeded";
			state.posts = action.payload.posts;
			state.hasMorePosts = action.payload.hasMore;
		},
		[fetchPosts.rejected]: (state, action) => {
			state.status = "failed";
			state.error = action.payload.message;
		},
		[fetchMorePosts.pending]: state => {
			state.fetchMorePostsStatus = "loading";
		},
		[fetchMorePosts.fulfilled]: (state, action) => {
			state.fetchMorePostsStatus = "succeeded";
			state.posts.push(...action.payload.posts);
			state.hasMorePosts = action.payload.hasMore;
		},
		[fetchMorePosts.rejected]: (state, action) => {
			state.fetchMorePostsStatus = "failed";
			state.error = action.payload.message;
		},
		[likePost.fulfilled]: (state, action) => {
			state.posts = state.posts.map(post =>
				post._id === action.payload._id
					? { ...action.payload, profilePicture: post.profilePicture }
					: post
			);
		},
		[deletePost.fulfilled]: (state, action) => {
			state.posts = state.posts.filter(post => post._id !== action.payload.postId);
		},
		[archivePost.fulfilled]: (state, { payload }) => {
			state.posts = state.posts.filter(post => post._id !== payload.archivedPostId);
		}
	}
});

export default postsSlice.reducer;
