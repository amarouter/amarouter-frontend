import React from "react";
import MarkdownNavbar from "markdown-navbar";
import { XLARGE_SCREEN_WIDTH_LIMIT } from "../constants/screenConstants";

const BlogPostDetailAside = ({ blogPostSelector }) => {
  const { blogPost } = blogPostSelector;
  return (
    <div className="mark-down-navbar">
      <MarkdownNavbar
        source={blogPost.text}
        headingTopOffset={
          window.innerWidth > XLARGE_SCREEN_WIDTH_LIMIT ? -480 : -430
        }
      />
    </div>
  );
};

export default BlogPostDetailAside;
