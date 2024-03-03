import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebase/firebaseConfig";

export const fetchBlogPostList = createAsyncThunk(
  "blogPost/fetchAll",
  async () => {
    const docRef = db.collection("blog_posts");
    const snapshot = await docRef.get();

    const blogPostList = snapshot.docs.map((doc) => {
      const data = doc.data() || {};
      let blogPost = {};
      if (data.createdAt) {
        data.createdAt = data.createdAt.toDate().toISOString();
        blogPost = { ...data };
      }
      return blogPost;
    });

    return blogPostList;
  }
);

const blogListSlice = createSlice({
  name: "blogPostList",
  initialState: { blogPosts: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogPostList.pending, (state) => {
        state.loading = true;
        state.blogPosts = [];
      })
      .addCase(fetchBlogPostList.fulfilled, (state, action) => {
        state.loading = false;
        state.blogPosts = action.payload;
        state.error = null;
      })
      .addCase(fetchBlogPostList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const fetchBlogPostBySlug = createAsyncThunk(
  "blogPost/fetchBySlug",
  async (slug) => {
    const docRef = db.collection("blog_posts");
    const snapshot = await docRef.where("slug", "==", slug).get();

    const data = snapshot.docs[0]?.data() || {};
    let blogPost = {};
    if (data.createdAt) {
      data.createdAt = data.createdAt.toDate().toISOString();
      blogPost = { ...data };
    }

    // fetch text from GitHub
    if (blogPost.textUrl) {
      const response = await fetch(blogPost.textUrl);
      blogPost.text = await response.text();
    }
    return blogPost;
  }
);

const blogPostSlice = createSlice({
  name: "blogPostSlice",
  initialState: { blogPost: {} },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogPostBySlug.pending, (state) => {
        state.loading = true;
        state.blogPost = {};
      })
      .addCase(fetchBlogPostBySlug.fulfilled, (state, action) => {
        state.loading = false;
        state.blogPost = action.payload;
        state.error = null;
      })
      .addCase(fetchBlogPostBySlug.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const blogListReducers = blogListSlice.reducer;
export const blogPostReducers = blogPostSlice.reducer;
