import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listBlogPosts } from "../actions/blogActions";

import {
  Container,
  Row,
  Col,
  ListGroup,
  Figure,
  Button,
  Navbar,
  Nav,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

import BlogCard from "../components/BlogCard";
import Logo from "../components/Logo";
import javaScriptLogo from "../images/JavaScriptLogo.png";
import pythonLogo from "../images/pythonLogo.png";
import sqlLogo from "../images/sqlLogo.png";

function Blog() {
  const dispatch = useDispatch();
  const blogPostList = useSelector((state) => state.blogPostList);
  const { error, loading, blogPosts } = blogPostList;

  useEffect(() => {
    dispatch(listBlogPosts());
  }, [dispatch]);

  return (
    <div className="component-blog">
      <Container>
        <Row>
          <header className="App-header">
            <Navbar bg="black" variant="black">
              <LinkContainer to="/">
                <Navbar.Brand>
                  <Logo />
                </Navbar.Brand>
              </LinkContainer>
              <Nav className="mr-auto"></Nav>
              <Link to="/">
                <Button variant="outline-light" className="ml-4" size="lg">
                  Giriş Yap
                </Button>
              </Link>
            </Navbar>
          </header>
        </Row>
        <Row className="pt-5">
          <Col xs="4">
            <p className="Categories">Kategoriler</p>
            <ListGroup>
              <ListGroup.Item>
                <Figure xs={4}>
                  <Figure.Image
                    width={30}
                    height={30}
                    alt="JavaScript"
                    src={javaScriptLogo}
                  />
                </Figure>
                <span>JavaScript</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <Figure xs={4}>
                  <Figure.Image
                    width={30}
                    height={30}
                    alt="Python"
                    src={pythonLogo}
                  />
                </Figure>
                <span>Python</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <Figure xs={4}>
                  <Figure.Image
                    width={30}
                    height={30}
                    alt="SQL"
                    src={sqlLogo}
                  />
                </Figure>
                <span>SQL</span>
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col xs="8">
            <br></br>
            {loading ? (
              <h2>Loading...</h2>
            ) : error ? (
              <h3>{error}</h3>
            ) : (
              blogPosts.map((post) => <BlogCard key={post._id} card={post} />)
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Blog;
