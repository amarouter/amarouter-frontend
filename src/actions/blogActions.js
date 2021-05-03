import axios from "axios";
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

    const { data } = await axios.get("http://127.0.0.1:8000/blog/posts");

    dispatch({
      type: BLOG_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BLOG_LIST_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const listBlogPost = (slug) => async (dispatch) => {
  try {
    dispatch({ type: BLOG_POST_REQUEST });

    const { data } = await axios.get(`http://127.0.0.1:8000/blog/post/${slug}`);

    dispatch({
      type: BLOG_POST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BLOG_POST_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};
