import { useSelector } from "react-redux";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import TutorialDetailArticle from "../components/tutorials/TutorialDetailArticle";
import TutorialDetailAside from "../components/tutorials/TutorialDetailAside";
import Header from "../components/particles/Header";

// eslint-disable-next-line react/prop-types
const Tutorial = ({ match }) => {
  const tutorialListSelector = useSelector((state) => state.tutorialList);
  const { error } = tutorialListSelector;

  return (
    <div className="Tutorial-page">
      <Header />
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
    </div>
  );
};

export default Tutorial;
