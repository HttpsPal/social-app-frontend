import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
	user: null,
	token: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState: initialStateValue,
	reducers: {
		setCredentials: (state, action) => {
			const { username, token } = action.payload;
			state.user = username;
			state.token = token;
		},
		logOut: (state) => {
			state.user = null;
			state.token = null;
		},
	},
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
