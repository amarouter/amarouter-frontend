import React from "react";
import MarkdownNavbar from "markdown-navbar";

const BlogPostDetailAside = ({ blogPostSelector }) => {
  const { blogPost } = blogPostSelector;
  return (
    <div className="mark-down-navbar">
      <MarkdownNavbar
        source={blogPost.text}
        headingTopOffset={window.innerWidth > 1140 ? -480 : -430}
      />
    </div>
  );
};

export default BlogPostDetailAside;
