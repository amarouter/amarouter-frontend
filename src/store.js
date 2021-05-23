import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { blogListReducers, blogPostReducers } from "./reducers/blogReducers";
import { userSigninReducer, userSignupReducer } from "./reducers/userReducers";

const reducer = combineReducers({
  blogPostList: blogListReducers,
  blogPostDetails: blogPostReducers,
  userSignin: userSigninReducer,
  userSignup: userSignupReducer,
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
