import { db } from "../firebase/firebaseConfig";
import {
  BLOG_LIST_REQUEST,
  BLOG_LIST_SUCCESS,
  BLOG_LIST_FAIL,
  BLOG_POST_REQUEST,
  BLOG_POST_SUCCESS,
  BLOG_POST_FAIL,
} from "../constants/blogConstants";

export const listBlogPosts = () => async (dispatch) => {
  try {
    dispatch({ type: BLOG_LIST_REQUEST });

    const docRef = db.collection("blog_posts");
    docRef
      .get()
      .then((snapshot) => {
        let data = [];
        if (snapshot && !snapshot.empty) {
          snapshot.forEach((doc) => {
            data.push({ ...doc.data(), _id: doc.id });
          });
        }
        return data;
      })
      .then((data) => {
        dispatch({
          type: BLOG_LIST_SUCCESS,
          payload: data,
        });
      })
      .catch((error) => {
        console.log("Got an error: ", error);
      });
  } catch (error) {
    dispatch({
      type: BLOG_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listBlogPost = (slug) => async (dispatch) => {
  try {
    dispatch({ type: BLOG_POST_REQUEST });
    const docRef = db.collection("blog_posts");
    docRef
      .where("slug", "==", slug)
      .get()
      .then((snapshot) => {
        let data = [];
        if (snapshot && !snapshot.empty) {
          snapshot.forEach((doc) => {
            data.push({ ...doc.data(), _id: doc.id });
          });
        }
        return data;
      })
      .then((snapshot) => {
        const data = snapshot[0];
        if (data && data.hasOwnProperty("textUrl")) {
          fetch(data.textUrl)
            .then((response) => response.text())
            .then((blogPostText) => data["text"] = blogPostText)
            .then(() =>
              dispatch({
                type: BLOG_POST_SUCCESS,
                payload: data,
              })
            );
        }
      })
      .catch((error) => {
        console.log("Got an error: ", error);
      });
  } catch (error) {
    dispatch({
      type: BLOG_POST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
