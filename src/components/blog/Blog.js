import React, { useState, useEffect } from "react";

import {
  Container,
  Row,
  Col,
  ListGroup,
  Figure,
} from "react-bootstrap";
import axios from 'axios';

import BlogCard from "./BlogCard";
import "./Blog.css";
import Header from "../blog/Header";
import javaScriptLogo from "../../images/JavaScriptLogo.png";
import pythonLogo from "../../images/pythonLogo.png";
import sqlLogo from "../../images/sqlLogo.png";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const data = await axios.get('http://127.0.0.1:8000/blog/posts');
      setPosts(data.data);
    }
    fetchPosts();
  }, []);

  return (
    <div className="component-blog">
      <Container>
        <Row>
          <Header />
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
            {posts.map((post) => (
              <BlogCard key={post._id} card={post} />
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Blog;
