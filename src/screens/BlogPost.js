import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";

import { listBlogPost } from "../actions/blogActions";
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
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <article>
            <ReactMarkdown children={blogPost.text} />
        </article>
      )}
    </div>
  );
};

export default BlogPost;
