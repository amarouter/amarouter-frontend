import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

import TutorialDetailArticle from "../components/TutorialDetailArticle";
import TutorialDetailAside from "../components/TutorialDetailAside";


const Tutorial = ({ match }) => {
  const tutorialListSelector = useSelector((state) => state.tutorialList);
  const { error } = tutorialListSelector;

  return (
    <div className="tutorial">
      <Container fluid>
        <Row>
          <Col sm={3}>
            <TutorialDetailAside match={match} />
          </Col>
          <Col className="tutorial-detail-article" sm={7}>
            <TutorialDetailArticle error={error} />
          </Col>
          <Col sm={2} />
        </Row>
      </Container>
    </div>
  );
};

export default Tutorial;
