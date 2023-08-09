import { createSlice } from "@reduxjs/toolkit";

const userSigninSlice = createSlice({
  name: "userSignin",
  initialState: {},
  reducers: {
    userSigninRequest: (state) => {
      state.loading = true;
    },
    userSigninSuccess: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
    },
    userSigninFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    userSignout: (state) => {
      return {};
    },
  },
});

export const {
  userSigninRequest,
  userSigninSuccess,
  userSigninFail,
  userSignout,
} = userSigninSlice.actions;

export const userSigninReducer = userSigninSlice.reducer;
