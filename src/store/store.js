import { configureStore } from "@reduxjs/toolkit";
import {
  tutorialListReducers,
  tutorialPageReducers,
} from "../reducers/tutorialReducers";
import { blogListReducers, blogPostReducers, userReducer } from "./features";

const reducer = {
  userSignin: userReducer,
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

const store = configureStore({
  reducer,
  preloadedState,
  devTools: true,
});

export default store;
