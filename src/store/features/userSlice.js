import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { auth } from "../../firebase/firebaseConfig";

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

export const signIn = createAsyncThunk("user/signIn", async (user) => {
  if (user) {
    const userInfo = extractUserInfo(user);
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    return userInfo;
  }
  throw new Error("Invalid user data");
});

export const signOut = createAsyncThunk("user/signOut", async () => {
  auth.signOut().then(() => {
    localStorage.removeItem("userInfo");
    return null;
  });
});

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.loading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.response && action.error.response.data.message
            ? action.error.response.data.message
            : action.error.message;
      })
      .addCase(signOut.pending, (state) => {
        state.loading = true;
      })
      .addCase(signOut.fulfilled, (state) => {
        state.loading = false;
        state.userInfo = null;
      })
      .addCase(signOut.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const userReducer = userSlice.reducer;
