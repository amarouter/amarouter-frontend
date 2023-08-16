// asyncActions.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../firebase/firebaseConfig";

/**
 * Extracts the blog post data from the firestore document
 **/
function extractBlogPost(doc) {
  const data = doc.data();
  if (data.createdAt) {
    data.createdAt = data.createdAt.toDate().toISOString();
  }
  const blogPost = { ...data, _id: doc.id };
  return blogPost;
}

export const fetchBlogPostList = createAsyncThunk(
  "blogPost/fetchAll",
  async () => {
    const docRef = db.collection("blog_posts");
    const snapshot = await docRef.get();
    return snapshot.docs.map((doc) => extractBlogPost(doc));
  }
);

export const fetchBlogPostBySlug = createAsyncThunk(
  "blogPost/fetchBySlug",
  async (slug) => {
    const docRef = db.collection("blog_posts");
    const snapshot = await docRef.where("slug", "==", slug).get();
    let data = [];
    if (snapshot && !snapshot.empty) {
      data = snapshot.docs.map((doc) => extractBlogPost(doc));
    }
    const blogData = data[0];
    if (blogData && blogData.hasOwnProperty("textUrl")) {
      const response = await fetch(blogData.textUrl);
      blogData["text"] = await response.text();
    }
    return blogData;
  }
);
