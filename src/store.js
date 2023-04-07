import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { userSigninReducer } from "./reducers/userReducers";
import {
  tutorialListReducers,
  tutorialPageReducers,
} from "./reducers/tutorialReducers";
import { blogListReducers, blogPostReducers } from "./reducers/blogReducers";

const reducer = {
  userSignin: userSigninReducer,
  tutorialList: tutorialListReducers,
  tutorialPage: tutorialPageReducers,
  blogPostList: blogListReducers,
  blogPostDetails: blogPostReducers,
};

const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const preloadedState = {
  userSignin: { userInfo: userInfoFromLocalStorage },
};

const middleware = [thunk];

const store = configureStore({
  reducer,
  preloadedState,
  middleware,
  devTools: true,
});

export default store;
