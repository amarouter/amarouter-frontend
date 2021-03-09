import React, { Component } from "react";

import { Container, Row, Col, Figure } from "react-bootstrap";

import "./Blog.css";
class BlogCard extends Component {
  render() {
    return (
      <div className="blog-card">
        <Container>
          <Row>
            <Col xs="4">
              <Figure>
                <Figure.Image
                  width={250}
                  height={250}
                  alt={this.props.card.alt}
                  src={this.props.card.photo}
                />
              </Figure>
            </Col>
            <Col xs="8">
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
              <p>
                Lobortis mauris leo tincidunt ultricies leo.At orci at
                pellentesque sit id arcu egestas.
              </p>
              <span>Jul 13, 2020 · 3 min read</span>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default BlogCard;
