// Dependencies
import { configureStore } from "@reduxjs/toolkit";

// Slice
import searchReducer from "./slices/searchSlice";
import canvasReducer from "./slices/canvasSlice";
import newQuotesReducer from "./slices/newQuotesSlice";
import editQuotesReducer from "./slices/editQuotesSlice";
import shareQuotesReducer from "./slices/shareQuotesSlice";
import loginRegisterReducer from "./slices/loginRegisterSlice";
import postsReducer from "./slices/postsSlice";
import postReducer from "./slices/postSlice";
import emailVerificationReducer from "./slices/emailVerificationSlice";
import authReducer from "./slices/authSlice";
import modalReducer from "./slices/modalSlice";
import userSuggestionReducer from "./slices/userSuggestionSlice";
import userProfileReducer from "./slices/userProfileSlice";
import userFavoritesReducer from "./slices/userFavoritesSlice";
import userArchivedReducer from "./slices/userArchivedSlice";
import settingReduder from "./slices/settingSlice";
import socialReducer from "./slices/socialSlice";
import articleReducer from "./slices/articleSlice";
import notificationsReducer from "./slices/notificationsSlice";
import reportReducer from "./slices/reportSlice";
import userReportReducer from "./slices/userReportSlice";
import themeReducer from "./slices/themeSlice";
import pwaReducer from "./slices/pwaSlice";
import resetPasswordReducer from "./slices/resetPasswordSlice";
import tempPostsReducer from "./slices/tempPostsSlice";
import imagesReducer from "./slices/imagesSlice";

const store = configureStore({
	reducer: {
		search: searchReducer,
		canvas: canvasReducer,
		newQuotes: newQuotesReducer,
		editQuotes: editQuotesReducer,
		shareQuotes: shareQuotesReducer,
		loginRegister: loginRegisterReducer,
		posts: postsReducer,
		post: postReducer,
		emailVerification: emailVerificationReducer,
		auth: authReducer,
		modal: modalReducer,
		userSuggestion: userSuggestionReducer,
		userProfile: userProfileReducer,
		userFavorites: userFavoritesReducer,
		userArchived: userArchivedReducer,
		settings: settingReduder,
		social: socialReducer,
		article: articleReducer,
		notifications: notificationsReducer,
		report: reportReducer,
		userReport: userReportReducer,
		theme: themeReducer,
		pwa: pwaReducer,
		resetPassword: resetPasswordReducer,
		tempPosts: tempPostsReducer,
		images: imagesReducer
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false
		})
});

export default store;
