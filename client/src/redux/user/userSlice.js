import { createSlice } from "@reduxjs/toolkit";

const userInStorage = JSON.parse(localStorage.getItem("user"));
const initialState = {
	currentUser: userInStorage,
	loading: false,
	error: false,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		signInStart: (state, action) => {
			state.currentUser = null;
			state.loading = true;
			state.error = false;
		},
		signInSuccess: (state, action) => {
			state.currentUser = action.payload;
			state.loading = false;
			state.error = false;
		},
		signInfailure: (state, action) => {
			state.currentUser = null;
			state.loading = false;
			state.error = action.payload;
		},
		signUpStart: (state, action) => {
			state.currentUser = null;
			state.loading = true;
			state.error = false;
		},
		signUpSuccess: (state, action) => {
			state.currentUser = action.payload;
			state.loading = false;
			state.error = false;
		},
		signUpfailure: (state, action) => {
			state.currentUser = null;
			state.loading = false;
			state.error = action.payload;
		},
		logOutStart: (state, action) => {
			state.currentUser = null;
			state.loading = true;
			state.error = false;
		},
		logOutSuccess: (state, action) => {
			state.currentUser = null;
			state.loading = false;
			state.error = false;
		},
	},
});

export const {
	signInStart,
	signInSuccess,
	signInfailure,
	signUpStart,
	signUpSuccess,
	signUpfailure,
	logOutStart,
	logOutSuccess,
} = userSlice.actions;
export default userSlice.reducer;
