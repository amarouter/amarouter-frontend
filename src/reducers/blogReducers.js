import {
  BLOG_LIST_REQUEST,
  BLOG_LIST_SUCCESS,
  BLOG_LIST_FAIL,
  BLOG_POST_REQUEST,
  BLOG_POST_SUCCESS,
  BLOG_POST_FAIL,
} from "../constants/blogConstants";

export const blogListReducers = (state = { blogPosts: [] }, action) => {
  switch (action.type) {
    case BLOG_LIST_REQUEST:
      return { loading: true, blogPosts: [] };

    case BLOG_LIST_SUCCESS:
      return { loading: false, blogPosts: action.payload };

    case BLOG_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const blogPostReducers = (state = { blogPost: {} }, action) => {
  switch (action.type) {
    case BLOG_POST_REQUEST:
      return { loading: true, blogPost: {} };

    case BLOG_POST_SUCCESS:
      return { loading: false, blogPost: action.payload };

    case BLOG_POST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
