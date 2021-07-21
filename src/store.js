import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userSigninReducer } from "./reducers/userReducers";
import { tutorialListReducers, tutorialPageReducers } from "./reducers/tutorialReducers";
import { blogListReducers, blogPostReducers } from "./reducers/blogReducers";

const reducer = combineReducers({
  userSignin: userSigninReducer,
  tutorialList: tutorialListReducers,
  tutorialPage: tutorialPageReducers,
  blogPostList: blogListReducers,
  blogPostDetails: blogPostReducers,
});

const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userSignin: { userInfo: userInfoFromLocalStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
