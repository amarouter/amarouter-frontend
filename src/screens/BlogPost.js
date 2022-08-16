import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { listBlogPost } from "../actions/blogActions";
import BlogPostDetailHeader from "../components/BlogPostDetailHeader";
import { Container, Row, Col } from "react-bootstrap";
import BlogPostDetailArticle from "../components/BlogPostDetailArticle";
import BlogPostDetailAside from "../components/BlogPostDetailAside";
import 'markdown-navbar/dist/navbar.css';

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
        <Row>
          <Col className="d-none d-sm-block blog-post-aside" sm="3"><BlogPostDetailAside blogPostSelector={blogPostSelector} /></Col>
          <Col className="blog-post-text mb-3" sm="9">
            <BlogPostDetailArticle blogPostSelector={blogPostSelector} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BlogPost;
