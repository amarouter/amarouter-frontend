// asyncActions.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../firebase/firebaseConfig";

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
