import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";

import { listBlogPost } from "../actions/blogActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

const BlogPost = ({ match }) => {
  const dispatch = useDispatch();
  const blogPostSelector = useSelector((state) => state.blogPostDetails);
  const { loading, error, blogPost } = blogPostSelector;
  const [ blogPostText, setBlogPostText ] = useState();

  useEffect(() => {
    dispatch(listBlogPost(match.params.slug));
  }, [dispatch, match]);

  useEffect(() => {
    fetch(blogPost.textUrl)
    .then((response) => response.text())
    .then((data) => (setBlogPostText(data)))
  }, [blogPost.textUrl]);

  return (
    <div className="blog-post">
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          <ReactMarkdown children={blogPostText} />
        </div>
      )}
    </div>
  );
};

export default BlogPost;
