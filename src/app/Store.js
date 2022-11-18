import { configureStore } from "@reduxjs/toolkit";
import authAPI from "./api/authAPI";
import postAPI from "./api/postAPI";
import authReducer from "../features/authSlice";

export default configureStore({
	reducer: {
		auth: authReducer,
		[authAPI.reducerPath]: authAPI.reducer,
		[postAPI.reducerPath]: postAPI.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.concat(authAPI.middleware)
			.concat(postAPI.middleware),
});
