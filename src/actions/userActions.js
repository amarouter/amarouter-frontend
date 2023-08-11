import { auth } from "../firebase/firebaseConfig";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  userSigninRequest,
  userSigninSuccess,
  userSigninFail,
  userSignout,
} from "../reducers/userReducers";

/**
 * For more properties, check:
 * https://firebase.google.com/docs/auth/web/manage-users
 * https://firebase.google.com/docs/reference/js/auth.user
 * https://firebase.google.com/docs/reference/js/auth.userinfo
 * @param {firebase.auth.UserCredential} user
 * @returns object
 **/
const extractUserInfo = (user) => ({
  uid: user.uid,
  email: user.email,
  displayName: user.displayName,
});

export const signIn = createAsyncThunk(
  "user/signIn",
  async (user, { dispatch }) => {
    try {
      dispatch(userSigninRequest());

      if (user) {
        const userInfo = extractUserInfo(user);
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        dispatch(userSigninSuccess(userInfo));
      } else {
        dispatch(userSigninFail("Hata meydana geldi."));
      }
    } catch (error) {
      const errorMessage =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch(userSigninFail(errorMessage));
    }
  }
);

export const signOut = () => (dispatch) => {
  auth
    .signOut()
    .then(() => {
      localStorage.removeItem("userInfo");
      dispatch(userSignout());
    })
    .catch((error) => {
      console.log("firebase signOut error: ", error);
      localStorage.removeItem("userInfo");
      dispatch(userSignout());
    });
};
