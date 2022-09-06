import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

import TutorialDetailArticle from "../components/tutorials/TutorialDetailArticle";
import TutorialDetailAside from "../components/tutorials/TutorialDetailAside";

const Tutorial = ({ match }) => {
  const tutorialListSelector = useSelector((state) => state.tutorialList);
  const { error } = tutorialListSelector;

  return (
    <div className="tutorial">
      <Container fluid>
        <Row>
          <Col className="p-0" sm={1} />
          <Col className="pl-0" sm={3}>
            <TutorialDetailAside match={match} />
          </Col>
          <Col className="tutorial-detail-article" sm={6}>
            <TutorialDetailArticle error={error} />
          </Col>
          <Col sm={2} />
        </Row>
      </Container>
    </div>
  );
};

export default Tutorial;
