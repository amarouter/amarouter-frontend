import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Figure from "react-bootstrap/Figure";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";

import BlogCard from "../components/blogs/BlogCard";
import Loader from "../components/particles/Loader";
import Message from "../components/particles/Message";
import Header from "../components/particles/Header";
import { db } from "../firebase/firebaseConfig";
import { fetchBlogPostList } from "../store/features";

function Blog() {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredBlogPosts, setFilteredBlogPosts] = useState([]);
  const blogPostList = useSelector((state) => state.blogPostList);
  const { error, loading, blogPosts } = blogPostList;

  useEffect(() => {
    dispatch(fetchBlogPostList());
  }, [dispatch]);

  useEffect(() => {
    getDocs(collection(db, "blog_post_categories"))
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
              <p className="me-5">Kategoriler</p>
              <ButtonGroup className="button-group" vertical>
                <Button
                  key="all-categories"
                  className="toggle-button"
                  variant="secondary"
                  name="radio"
                  onClick={() => setSelectedCategory(null)}
                >
                  <Form.Check
                    type="radio"
                    id="all-categories"
                    name="categories"
                    checked={!selectedCategory}
                    label="Tüm Kategoriler"
                    onChange={() => setSelectedCategory(null)}
                  />
                </Button>
                {categories.map((item, index) => (
                  <Button
                    key={index}
                    id={`radio-${index}`}
                    className="toggle-button mt-2"
                    variant="secondary"
                    name="radio"
                    value={item.id}
                    onClick={(e) => setSelectedCategory(e.currentTarget.value)}
                  >
                    <Form.Check
                      type="radio"
                      key={index}
                      id={`radio-${index}`}
                      name="categories"
                      value={item.id}
                      checked={selectedCategory === item.id}
                      label={
                        <div className="d-flex align-items-center">
                          <Figure xs={4} className="my-0">
                            <Figure.Image
                              className="ms-2 my-0"
                              width={25}
                              height={25}
                              alt={item.name}
                              src={item.icon_url}
                            />
                          </Figure>
                          <span className="ms-1" id={item.id}>
                            {item.name}
                          </span>
                        </div>
                      }
                      onChange={(e) =>
                        setSelectedCategory(e.currentTarget.value)
                      }
                    />
                  </Button>
                ))}
              </ButtonGroup>
            </Col>
            <Col xs="8">
              <br />
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
