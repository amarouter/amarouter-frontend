import { auth, db } from "../firebase/firebaseConfig";
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

export const signUp = (signUpInfo) => async (dispatch) => {
  try {
    dispatch({ type: USER_SIGNUP_REQUEST });
    if (
      !signUpInfo.email ||
      !signUpInfo.password ||
      !signUpInfo.name ||
      !signUpInfo.surname ||
      !signUpInfo.username ||
      signUpInfo.email === "" ||
      signUpInfo.password === "" ||
      signUpInfo.name === "" ||
      signUpInfo.surname === "" ||
      signUpInfo.username === ""
    ) {
      dispatch({
        type: USER_SIGNUP_FAIL,
        payload: "Sign Up Informations are not valid!",
      });
      return;
    }

    auth
      .createUserWithEmailAndPassword(signUpInfo.email, signUpInfo.password)
      .then((result) => {
        if (result && result.user) {
          saveSignUpUserInfo(signUpInfo, result.user);

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

export const saveSignUpUserInfo = (signUpInfo, userInfo) => {
  const docRef = db.collection("users");
  docRef
    .doc(userInfo.uid)
    .set({
      name: signUpInfo.name,
      surname: signUpInfo.surname,
      username: signUpInfo.username,
    })
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
};
