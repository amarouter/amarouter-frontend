import MarkdownNavbar from "markdown-navbar";

import { XLARGE_SCREEN_WIDTH_LIMIT } from "../../constants/screenConstants";

/* eslint-disable-next-line react/prop-types */
const BlogPostDetailAside = ({ blogPostText }) => {
  return (
    <div className="mark-down-navbar">
      <MarkdownNavbar
        /* eslint-disable-next-line react/prop-types */
        source={blogPostText}
        headingTopOffset={
          window.innerWidth > XLARGE_SCREEN_WIDTH_LIMIT ? -480 : -430
        }
      />
    </div>
  );
};

export default BlogPostDetailAside;
