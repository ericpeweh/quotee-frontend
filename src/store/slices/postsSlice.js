// Dependencies
import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

// Actions
import {
	fetchPosts,
	likePost,
	deletePost,
	fetchMorePosts,
	archivePost,
	fetchTempPosts
} from "../../actions/posts";

const initialState = {
	posts: [],
	status: "idle",
	error: "",
	fetchMorePostsStatus: "idle",
	hasMorePosts: false,
	hasNewPosts: false
};

const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		loadNewPosts: (state, { payload }) => {
			const newPosts = payload.posts.filter(
				newPost => !state.posts.some(currentPost => newPost._id === currentPost._id)
			);
			if (newPosts.length > 0) {
				state.posts.unshift(...newPosts);
			}
			state.hasNewPosts = false;
		}
	},
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
				post._id === action.payload.updatedPost._id
					? { ...action.payload.updatedPost, profilePicture: post.profilePicture }
					: post
			);
		},
		[deletePost.fulfilled]: (state, action) => {
			state.posts = state.posts.filter(post => post._id !== action.payload.postId);
		},
		[archivePost.fulfilled]: (state, { payload }) => {
			state.posts = state.posts.filter(post => post._id !== payload.archivedPostId);
		},
		[fetchTempPosts.fulfilled]: (state, { payload }) => {
			const newPosts = payload.posts.filter(
				newPost =>
					!state.posts.some(
						currentPost =>
							newPost._id === currentPost._id ||
							moment().diff(payload.posts[0].createdAt, "hours") > 0
					)
			);
			if (newPosts.length > 0) {
				state.hasNewPosts = true;
			}
		}
	}
});

export const { loadNewPosts } = postsSlice.actions;

export default postsSlice.reducer;
