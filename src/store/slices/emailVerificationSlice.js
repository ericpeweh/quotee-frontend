// Dependencies
import { createSlice } from "@reduxjs/toolkit";

// Actions
import { verifyEmail } from "../../actions/users";

const initialState = {
	status: "idle",
	message: "",
	redirect: false
};

const emailVerificationSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {},
	extraReducers: {
		[verifyEmail.pending]: state => {
			state.status = "loading";
		},
		[verifyEmail.fulfilled]: (state, action) => {
			state.status = "succeeded";
			state.message = action.payload.message;
			state.redirect = true;
		},
		[verifyEmail.rejected]: (state, action) => {
			state.status = "failed";
			state.message = action.payload.message;
		}
	}
});

export default emailVerificationSlice.reducer;
