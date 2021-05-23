import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { listBlogPost } from "../actions/blogActions";
import Header from "../components/Header";
import Loader from "../components/Loader";
import Message from "../components/Message";

const BlogPost = ({ match }) => {
  const dispatch = useDispatch();
  const blogPostSelector = useSelector((state) => state.blogPostDetails);
  const { loading, error, blogPost } = blogPostSelector;

  useEffect(() => {
    dispatch(listBlogPost(match.params.slug));
  }, [dispatch, match]);

  return (
    <div className="blog-post">
      <Header />
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          <h3>{blogPost.title}</h3>
          <article>{blogPost.text}</article>
        </div>
      )}
    </div>
  );
};

export default BlogPost;
