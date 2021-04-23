import React, { useState, useEffect } from "react";

import {
  Container,
  Row,
  Col,
  Button,
  ListGroup,
  Figure,
} from "react-bootstrap";

import BlogCard from "./BlogCard";
import "./Blog.css";
import BlogPhotoSample from "../../images/BlogPhotoSample.png";
import Header from "../blog/Header";
import javaScriptLogo from "../../images/JavaScriptLogo.png";
import pythonLogo from "../../images/pythonLogo.png";
import sqlLogo from "../../images/sqlLogo.png";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const data = [
        {
          title: "JavaScript Yazısı",
          alt: "JavaScript",
          photo: BlogPhotoSample,
        },
        {
          title: "JavaScript Yazısı",
          alt: "JavaScript",
          photo: BlogPhotoSample,
        },
        {
          title: "JavaScript Yazısı",
          alt: "JavaScript",
          photo: BlogPhotoSample,
        },
      ];
      setPosts(data);
    }
    fetchPosts();
  }, []);

  return (
    <div className="component-blog">
      <Container>
        <Row>
          <Header></Header>
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
              <BlogCard card={post} />
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Blog;
