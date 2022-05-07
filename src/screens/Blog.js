import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listBlogPosts } from "../actions/blogActions";
import { db } from "../firebase/firebaseConfig";

import { Container, Row, Col, ListGroup, Figure } from "react-bootstrap";

import BlogCard from "../components/BlogCard";
import Loader from "../components/Loader";
import Message from "../components/Message";

function Blog() {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [filteredBlogPosts, setFilteredBlogPosts] = useState([]);
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

  useEffect(() => {
    setFilteredBlogPosts([...blogPosts]);
  }, [blogPosts]);

  useEffect(() => {
    setFilteredBlogPosts([...getFilteredList()]);
  }, [selectedCategory]);

  function getFilteredList() {
    // Avoid filter when selectedCategory is null
    if (!selectedCategory) {
      return blogPosts;
    }
    return blogPosts.filter(
      (item) => item.blogPostCategoryId === selectedCategory
    );
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.id);
  }

  return (
    <div className="component-blog">
      <Container>
        <Row className="pt-5">
          <Col xs="4">
            <p className="Categories">Kategoriler</p>
            <ListGroup>
              {categories.map((item, index) => (
                <ListGroup.Item key={index} onClick={handleCategoryChange}>
                  <Figure xs={4}>
                    <Figure.Image
                      width={30}
                      height={30}
                      alt={item.name}
                      src={item.icon_url}
                    />
                  </Figure>
                  <span id={item.id}>{item.name}</span>
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
              filteredBlogPosts.map((post) => (
                <BlogCard key={post._id} card={post} />
              ))
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Blog;
