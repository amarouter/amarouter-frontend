import React from "react";
import { Row, Col, Figure, Container } from "react-bootstrap";

const BlogPostDetailHeader = ({ title, readTime, createdAt }) => {
  return (
    <section className="blog-post-detail-section">
      <Container>
        <Row>
          <Col className="mt-5" xs="12" sm="3">
            <Figure>
              <Figure.Image className="blog-post-detail-figure-image" />
              <Figure.Caption className="blog-post-detail-figure-image-caption">
                Anonymous
              </Figure.Caption>
            </Figure>
          </Col>
          <Col className="mt-5" xs="12" sm="9">
            <Row>
              <h1>{title}</h1>
            </Row>
            <Row>
              <div className="blog-post-detail-info">
                <span>{createdAt ? createdAt.seconds : ""}</span>
                <span>{readTime} Min read</span>
                <span>1.907 Views</span>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogPostDetailHeader;
