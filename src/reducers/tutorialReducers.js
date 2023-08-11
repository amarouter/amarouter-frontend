import { createSlice } from "@reduxjs/toolkit";

// Tutorial List Slice
const tutorialListSlice = createSlice({
  name: "tutorialList",
  initialState: {
    tutorials: {},
    loading: false,
    error: undefined,
  },
  reducers: {
    tutorialListRequest: (state) => {
      state.loading = true;
      state.tutorials = {};
    },
    tutorialListSuccess: (state, action) => {
      state.loading = false;
      state.tutorials = action.payload;
    },
    tutorialListFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Tutorial Page Slice
const tutorialPageSlice = createSlice({
  name: "tutorialPage",
  initialState: {
    tutorialPage: {},
    loading: false,
    error: undefined,
  },
  reducers: {
    tutorialPageRequest: (state) => {
      state.loading = true;
    },
    tutorialPageSuccess: (state, action) => {
      state.loading = false;
      state.tutorialPage = action.payload;
    },
    tutorialPageFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { tutorialListRequest, tutorialListSuccess, tutorialListFail } =
  tutorialListSlice.actions;

export const { tutorialPageRequest, tutorialPageSuccess, tutorialPageFail } =
  tutorialPageSlice.actions;

export const tutorialListReducers = tutorialListSlice.reducer;
export const tutorialPageReducers = tutorialPageSlice.reducer;
