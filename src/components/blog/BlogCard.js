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
                  alt={"JavaScript"}
                  src={this.props.card.image}
                />
              </Figure>
            </Col>
            <Col xs="8">
              <h4>{this.props.card.title}</h4>
              <p>{this.props.card.text}</p>
              <span>{this.props.card.created_at} · {this.props.card.read_time} min read</span>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default BlogCard;
