import React from "react";
import ReactMarkdown from "react-markdown";

import Loader from "./Loader";
import Message from "./Message";

const BlogPostDetailArticle = ({ blogPostSelector }) => {
  const { loading, error, blogPost } = blogPostSelector;

  return (
    <div>
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

export default BlogPostDetailArticle;
