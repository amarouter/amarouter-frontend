import React, { Component } from "react";

import { Container, Row, Col, Figure, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

class BlogCard extends Component {
  render() {
    return (
      <div className="blog-card mb-2">
        <Container>
          <Row>
            <Col className="d-flex align-items-center" xs="4">
              <Figure className="mb-0">
                <Figure.Image
                  className="mb-0"
                  width={180}
                  height={180}
                  alt={this.props.card.slug}
                  src={this.props.card.imageUrl}
                />
              </Figure>
            </Col>
            <Col xs="8">
              <Card bg="dark" className="rounded">
                <LinkContainer to={`/blog/${this.props.card.slug}`}>
                  <Card.Header className="cursor-pointer">
                    {this.props.card.title}
                  </Card.Header>
                </LinkContainer>
                <Card.Body>
                  <Card.Text as="div">{this.props.card.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  {this.props.card.createdAt.seconds} ·{" "}
                  {this.props.card.read_time} min read
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default BlogCard;
