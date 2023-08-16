import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogPostList } from "../actions/blogActions";
import { db } from "../firebase/firebaseConfig";

import {
  Container,
  Row,
  Col,
  Figure,
  ToggleButton,
  ButtonGroup,
} from "react-bootstrap";

import BlogCard from "../components/blogs/BlogCard";
import Loader from "../components/particles/Loader";
import Message from "../components/particles/Message";
import Header from "../components/particles/Header";

function Blog() {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [filteredBlogPosts, setFilteredBlogPosts] = useState([]);
  const blogPostList = useSelector((state) => state.blogPostList);
  const { error, loading, blogPosts } = blogPostList;

  useEffect(() => {
    dispatch(fetchBlogPostList());
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
        setCategories((prevCategories) => [
          ...prevCategories,
          ...tentativeArray,
        ]);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, []);

  useEffect(() => {
    setFilteredBlogPosts([...blogPosts]);
  }, [blogPosts]);

  useEffect(() => {
    function getFilteredList() {
      // Avoid filter when selectedCategory is null
      return selectedCategory
        ? blogPosts.filter(
            (item) => item.blogPostCategoryId === selectedCategory
          )
        : blogPosts;
    }

    setFilteredBlogPosts([...getFilteredList()]);
  }, [selectedCategory, blogPosts]);

  return (
    <div className="Blog-page">
      <Header />
      <div className="component-blog">
        <Container>
          <Row className="pt-5">
            <Col className="categories" xs="4">
              <p className="mr-5">Kategoriler</p>
              <ButtonGroup className="button-group" vertical>
                <ToggleButton
                  className="toggle-button"
                  type="checkbox"
                  variant="secondary"
                  name="radio"
                  checked={!selectedCategory}
                  onChange={() => setSelectedCategory(null)}
                >
                  <span className="ml-2">Tüm Kategoriler</span>
                </ToggleButton>
                {categories.map((item, index) => (
                  <ToggleButton
                    className="toggle-button"
                    key={index}
                    id={`radio-${index}`}
                    type="checkbox"
                    variant="secondary"
                    name="radio"
                    value={item.id}
                    checked={selectedCategory === item.id}
                    onChange={(e) => setSelectedCategory(e.currentTarget.value)}
                  >
                    <Figure xs={4}>
                      <Figure.Image
                        className="mt-4 ml-2"
                        width={25}
                        height={25}
                        alt={item.name}
                        src={item.icon_url}
                      />
                    </Figure>
                    <span className="ml-1" id={item.id}>
                      {item.name}
                    </span>
                  </ToggleButton>
                ))}
              </ButtonGroup>
            </Col>

            <Col xs="8">
              <br></br>
              {loading ? (
                <Loader />
              ) : error ? (
                <Message variant="danger">{error}</Message>
              ) : (
                filteredBlogPosts.map((post) => (
                  <BlogCard key={post.slug} card={post} />
                ))
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Blog;
