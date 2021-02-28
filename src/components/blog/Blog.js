import React from "react";

import { Container, Row, Col, Button } from "react-bootstrap";

import "./Blog.css";

function Blog() {
  return (
    <div className="component-blog">
      <Container>
        <Row>
          <div>Header</div>
        </Row>
        <Row>
          <Col>
            <p>Kategoriler</p>
          </Col>
          <Col>
            <p>Bloglar</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Blog;
