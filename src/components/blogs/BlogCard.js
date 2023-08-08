import React from "react";

import { format } from "date-fns";
import trLocale from "date-fns/locale/tr";

import { Container, Row, Col, Figure, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const BlogCard = ({ card }) => {
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
                alt={card.slug}
                src={card.imageUrl}
              />
            </Figure>
          </Col>
          <Col xs="8">
            <Card bg="dark" className="rounded">
              <LinkContainer to={`/blog/${card.slug}`}>
                <Card.Header className="cursor-pointer">
                  {card.title}
                </Card.Header>
              </LinkContainer>
              <Card.Body>
                <Card.Text as="div">{card.description}</Card.Text>
              </Card.Body>
              <Card.Footer>
                {format(new Date(card.createdAt), "dd MMMM yyyy", {
                  locale: trLocale,
                })}{" "}
                · {card.readTime} min read
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BlogCard;
