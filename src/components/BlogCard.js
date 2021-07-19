import React, { Component } from "react";

import { Container, Row, Col, Figure, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
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
                  alt={this.props.card.slug}
                  src={this.props.card.image_url}
                />
              </Figure>
            </Col>
            <Col xs="8">
              <Card bg="dark" className="rounded">
                <LinkContainer to={`/blog/${this.props.card.slug}`}>
                  <Card.Header className="cursor-pointer">{this.props.card.title}</Card.Header>
                </LinkContainer>
                <Card.Body>
                  <Card.Text as="div">{this.props.card.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  {this.props.card.created_at.seconds} · {this.props.card.read_time} min
                  read
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
