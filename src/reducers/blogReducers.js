// slice.js
import { createSlice } from "@reduxjs/toolkit";
import { fetchBlogPostList } from "../actions/blogActions";

const blogListSlice = createSlice({
  name: "blogPostList",
  initialState: { blogPosts: [] },
  reducers: {},
  extraReducers: {
    [fetchBlogPostList.pending]: (state) => {
      state.loading = true;
      state.blogPosts = [];
    },
    [fetchBlogPostList.fulfilled]: (state, action) => {
      state.loading = false;
      state.blogPosts = action.payload;
      state.error = null;
    },
    [fetchBlogPostList.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
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
