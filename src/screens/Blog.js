import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listBlogPosts } from "../actions/blogActions";
import { db } from "../firebase/firebaseConfig";

import { Container, Row, Col, ListGroup, Figure } from "react-bootstrap";

import BlogCard from "../components/BlogCard";
import Loader from "../components/Loader";
import Message from "../components/Message";

import javaScriptLogo from "../images/JavaScriptLogo.png";
import pythonLogo from "../images/pythonLogo.png";
import sqlLogo from "../images/sqlLogo.png";

function Blog() {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const blogPostList = useSelector((state) => state.blogPostList);
  const { error, loading, blogPosts } = blogPostList;

  useEffect(() => {
    dispatch(listBlogPosts());
  }, [dispatch]);

  useEffect(() => {
    db.collection("blog_post_categories")
      .get()
      .then((querySnapshot) => {
        let tentativeArray = [];
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          tentativeArray.push({ id: doc.id, ...doc.data() });
        });
        setCategories([...categories, ...tentativeArray]);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, []);

  return (
    <div className="component-blog">
      <Container>
        <Row className="pt-5">
          <Col xs="4">
            <p className="Categories">Kategoriler</p>
            <ListGroup>
              {categories.map((item, index) => (
                <ListGroup.Item key={index}>
                  <Figure xs={4}>
                    <Figure.Image
                      width={30}
                      height={30}
                      alt={item.name}
                      src={item.icon_url}
                    />
                  </Figure>
                  <span>{item.name}</span>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>

          <Col xs="8">
            <br></br>
            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant="danger">{error}</Message>
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
