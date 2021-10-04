// Dependencies
import { createSlice } from "@reduxjs/toolkit";
import { fetchUserSuggestion } from "../../actions/users";

const initialState = {
	users: [],
	status: "idle"
};

const userSuggestionSlice = createSlice({
	name: "userSuggestion",
	initialState,
	reducers: {},
	extraReducers: {
		[fetchUserSuggestion.pending]: state => {
			state.status = "loading";
		},
		[fetchUserSuggestion.fulfilled]: (state, action) => {
			state.users = action.payload;
			state.status = "succeeded";
		},
		[fetchUserSuggestion.rejected]: state => {
			state.status = "failed";
		}
	}
});

export default userSuggestionSlice.reducer;
