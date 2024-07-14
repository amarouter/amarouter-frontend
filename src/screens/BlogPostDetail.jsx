import { useEffect } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchBlogPostBySlug } from "../store/features";
import BlogPostDetailHeader from "../components/blogs/BlogPostDetailHeader";
import BlogPostDetailArticle from "../components/blogs/BlogPostDetailArticle";
import BlogPostDetailAside from "../components/blogs/BlogPostDetailAside";
import "markdown-navbar/dist/navbar.css";
import Header from "../components/particles/Header";
import Loader from "../components/particles/Loader";

const BlogPostDetail = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const blogPostSelector = useSelector((state) => state.blogPostDetails);
  const { blogPost, loading } = blogPostSelector;

  useEffect(() => {
    dispatch(fetchBlogPostBySlug(slug));
  }, [dispatch, slug]);

  return (
    <>
      <Header />
      <div className="blog-post">
        {loading ? (
          <Loader />
        ) : (
          <BlogPostDetailHeader
            authorId={blogPost.authorId}
            title={blogPost.title}
            readTime={blogPost.readTime}
            createdAt={blogPost.createdAt}
          />
        )}
        <Container>
          <Row>
            <Col className="d-none d-sm-block blog-post-aside" sm="3">
              {loading ? (
                <Loader />
              ) : (
                <BlogPostDetailAside blogPostText={blogPost.text} />
              )}
            </Col>
            <Col className="blog-post-text mb-3" sm="9">
              {loading ? (
                <Loader />
              ) : (
                <BlogPostDetailArticle blogPostSelector={blogPostSelector} />
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default BlogPostDetail;
