import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { listBlogPost } from "../actions/blogActions";
import BlogPostDetailHeader from "../components/BlogPostDetailHeader";
import { Container, Row, Col } from "react-bootstrap";
import BlogPostDetailArticle from "../components/BlogPostDetailArticle";

const BlogPost = ({ match }) => {
  const dispatch = useDispatch();
  const blogPostSelector = useSelector((state) => state.blogPostDetails);
  const { blogPost } = blogPostSelector;

  useEffect(() => {
    dispatch(listBlogPost(match.params.slug));
  }, [dispatch, match]);

  return (
    <div className="blog-post">
      <BlogPostDetailHeader
        title={blogPost.title}
        readTime={blogPost.readTime}
        createdAt={blogPost.createdAt}
      />
      <Container>
        <Row className="mt-5">
          <Col xs="3">{""}</Col>
          <Col className="blog-post-text mb-3" xs="9">
            <BlogPostDetailArticle />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BlogPost;
