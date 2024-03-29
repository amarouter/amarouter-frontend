import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchBlogPostBySlug } from "../store/features";
import BlogPostDetailHeader from "../components/blogs/BlogPostDetailHeader";
import { Container, Row, Col } from "react-bootstrap";
import BlogPostDetailArticle from "../components/blogs/BlogPostDetailArticle";
import BlogPostDetailAside from "../components/blogs/BlogPostDetailAside";
import "markdown-navbar/dist/navbar.css";
import Header from "../components/particles/Header";

const BlogPostDetail = ({ match }) => {
  const dispatch = useDispatch();
  const blogPostSelector = useSelector((state) => state.blogPostDetails);
  const { blogPost } = blogPostSelector;

  useEffect(() => {
    dispatch(fetchBlogPostBySlug(match.params.slug));
  }, [dispatch, match]);

  return (
    <>
      <Header />
      <div className="blog-post">
        <BlogPostDetailHeader
          authorId={blogPost.authorId}
          title={blogPost.title}
          readTime={blogPost.readTime}
          createdAt={blogPost.createdAt}
        />
        <Container>
          <Row>
            <Col className="d-none d-sm-block blog-post-aside" sm="3">
              <BlogPostDetailAside blogPostSelector={blogPostSelector} />
            </Col>
            <Col className="blog-post-text mb-3" sm="9">
              <BlogPostDetailArticle blogPostSelector={blogPostSelector} />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default BlogPostDetail;
