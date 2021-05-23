import { auth } from "../firebase/firebaseConfig";
import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNOUT,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
} from "../constants/userConstants";

export const signIn = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_SIGNIN_REQUEST });

    auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        if (result && result.user) {
          dispatch({
            type: USER_SIGNIN_SUCCESS,
            payload: result.user,
          });

          localStorage.setItem("userInfo", JSON.stringify(result.user));
        } else {
          dispatch({
            type: USER_SIGNUP_FAIL,
            payload: "Hata meydana geldi.",
          });
        }
      })
      .catch((error) => {
        // firebase'den ayni sekilde error.response.data.message seklinde gelmiyor olabilir.
        dispatch({
          type: USER_SIGNIN_FAIL,
          payload: error.message,
        });
      });
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

export const signUp = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_SIGNUP_REQUEST });

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        if (result && result.user) {
          dispatch({
            type: USER_SIGNUP_SUCCESS,
            payload: result.user,
          });

          dispatch({
            type: USER_SIGNIN_SUCCESS,
            payload: result.user,
          });

          localStorage.setItem("userInfo", JSON.stringify(result.user));
        } else {
          dispatch({
            type: USER_SIGNUP_FAIL,
            payload: "Hata meydana geldi.",
          });
        }
      })
      .catch((error) => {
        // firebase'den ayni sekilde error.response.data.message seklinde gelmiyor olabilir.
        dispatch({
          type: USER_SIGNUP_FAIL,
          payload: error.message,
        });
      });
  } catch (error) {
    dispatch({
      type: USER_SIGNUP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
