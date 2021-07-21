import { auth } from "../firebase/firebaseConfig";
import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNOUT,
} from "../constants/userConstants";

export const signIn = (user) => async (dispatch) => {
  try {
    dispatch({ type: USER_SIGNIN_REQUEST });

    if (user) {
      dispatch({
        type: USER_SIGNIN_SUCCESS,
        payload: user,
      });
      localStorage.setItem("userInfo", JSON.stringify(user));
    } else {
      dispatch({
        type: USER_SIGNIN_FAIL,
        payload: "Hata meydana geldi.",
      });
    }
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const signOut = () => (dispatch) => {
  try {
    auth.signOut().then(() => {
      localStorage.removeItem("userInfo");
      dispatch({ type: USER_SIGNOUT });
    });
  } catch (error) {
    console.log("firebase signOut error: ", error);
    localStorage.removeItem("userInfo");
    dispatch({ type: USER_SIGNOUT });
  }
};
