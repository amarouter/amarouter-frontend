// asyncActions.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../firebase/firebaseConfig";
import {
  blogListRequest,
  blogListSuccess,
  blogListFail,
  blogPostRequest,
  blogPostSuccess,
  blogPostFail,
} from "../reducers/blogReducers";

export const listBlogPosts = createAsyncThunk(
  "blogPosts/fetchAll",
  async (_, { dispatch }) => {
    try {
      dispatch(blogListRequest());
      const docRef = db.collection("blog_posts");
      const snapshot = await docRef.get();
      let data = [];
      if (snapshot && !snapshot.empty) {
        snapshot.forEach((doc) => {
          const docData = doc.data();
          if (docData.createdAt) {
            docData.createdAt = docData.createdAt.toDate().toISOString();
          }
          data.push({ ...docData, _id: doc.id });
        });
      }
      dispatch(blogListSuccess(data));
    } catch (error) {
      dispatch(
        blogListFail(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        )
      );
    }
  }
);

export const listBlogPost = createAsyncThunk(
  "blogPost/fetchBySlug",
  async (slug, { dispatch }) => {
    try {
      dispatch(blogPostRequest());
      const docRef = db.collection("blog_posts");
      const snapshot = await docRef.where("slug", "==", slug).get();
      let data = [];
      if (snapshot && !snapshot.empty) {
        snapshot.forEach((doc) => {
          const docData = doc.data();
          if (docData.createdAt) {
            docData.createdAt = docData.createdAt.toDate().toISOString();
          }
          data.push({ ...docData, _id: doc.id });
        });
      }
      const blogData = data[0];
      if (blogData && blogData.hasOwnProperty("textUrl")) {
        const response = await fetch(blogData.textUrl);
        blogData["text"] = await response.text();
        dispatch(blogPostSuccess(blogData));
      }
    } catch (error) {
      dispatch(
        blogPostFail(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        )
      );
    }
  }
);
