import React from "react";

import {
  Container,
  Row,
  Col,
  Button,
  ListGroup,
  Figure,
} from "react-bootstrap";

import "./Blog.css";
import BlogPhotoSample from "../../images/BlogPhotoSample.png";


function Blog() {
  return (
    <div className="component-blog">
      <Container>
        <Row>
          <div>Header</div>
        </Row>
        <Row>
          <Col xs="4">
            <p>Kategoriler</p>
            <ListGroup>
              <ListGroup.Item>JavaScript</ListGroup.Item>
              <ListGroup.Item>Python</ListGroup.Item>
              <ListGroup.Item>SQL</ListGroup.Item>
            </ListGroup>
          </Col>

          <Col xs="3">
            <p>Bloglar</p>
            <Figure>
              <Figure.Image
                width={250}
                height={250}
                alt="JavaScript"
                src={BlogPhotoSample}
              />
            </Figure>
            <Figure>
              <Figure.Image
                width={250}
                height={250}
                alt="JavaScript"
                src={BlogPhotoSample}
              />
            </Figure>
            <Figure>
              <Figure.Image
                width={250}
                height={250}
                alt="JavaScript"
                src={BlogPhotoSample}
              />
            </Figure>
            <Figure>
              <Figure.Image
                width={250}
                height={250}
                alt="JavaScript"
                src={BlogPhotoSample}
              />
            </Figure>
            <Figure>
              <Figure.Image
                width={250}
                height={250}
                alt="JavaScript"
                src={BlogPhotoSample}
              />
            </Figure>
            <Figure>
              <Figure.Image
                width={250}
                height={250}
                alt="JavaScript"
                src={BlogPhotoSample}
              />
            </Figure>
          </Col>
          <Col xs="5">
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Blog;
