// slice.js
import { createSlice } from "@reduxjs/toolkit";

const blogListSlice = createSlice({
  name: "blogList",
  initialState: { blogPosts: [] },
  reducers: {
    blogListRequest: (state) => {
      state.loading = true;
      state.blogPosts = [];
    },
    blogListSuccess: (state, action) => {
      state.loading = false;
      state.blogPosts = action.payload;
    },
    blogListFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const blogPostSlice = createSlice({
  name: "blogPost",
  initialState: { blogPost: {} },
  reducers: {
    blogPostRequest: (state) => {
      state.loading = true;
      state.blogPost = {};
    },
    blogPostSuccess: (state, action) => {
      state.loading = false;
      state.blogPost = action.payload;
    },
    blogPostFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { blogListRequest, blogListSuccess, blogListFail } =
  blogListSlice.actions;

export const { blogPostRequest, blogPostSuccess, blogPostFail } =
  blogPostSlice.actions;

export const blogListReducers = blogListSlice.reducer;
export const blogPostReducers = blogPostSlice.reducer;
