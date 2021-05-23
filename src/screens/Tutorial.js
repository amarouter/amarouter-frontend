import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, ListGroup, Figure } from "react-bootstrap";

import { listTutorials, listTutorialPage } from "../actions/tutorialActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

const Tutorial = ({ match }) => {
  const dispatch = useDispatch();
  const tutorialList = useSelector((state) => state.tutorialList);
  const { error, loading, blogPost } = tutorialList;

  useEffect(() => {
    dispatch(listTutorials());
  }, [dispatch]);

  return (
    <div className="component-blog">
      <Container fluid>
        <h2>Rehberler</h2>
        <h3>JavaScript</h3>
        <p>JavaScript Rehberi</p>
        <br />
        <br />
        <br />
        <h3>Rehber İçeriği</h3>
        <p>JavaScript</p>
      </Container>
    </div>
  );
};

export default Tutorial;
