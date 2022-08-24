import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

import { listTutorials, listTutorialPage } from "../actions/tutorialActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import TutorialDetailArticle from "../components/TutorialDetailArticle";

const Tutorial = ({ match }) => {
  const dispatch = useDispatch();
  const tutorialListSelector = useSelector((state) => state.tutorialList);
  const { loading, error, tutorials } = tutorialListSelector;

  useEffect(() => {
    if (match.params.pageSlug) {
      dispatch(listTutorialPage(match.params));
    } else {
      dispatch(listTutorials(match.params.slug));
    }
  }, [dispatch, match.params]);

  return (
    <div className="tutorial">
      <Container fluid>
        <Row>
          <Col sm={3}>
            <aside>
              <h3>Menu</h3>

              {loading ? (
                <Loader />
              ) : error ? (
                <Message variant="danger">{error}</Message>
              ) : !tutorials || !tutorials.hasOwnProperty("sections") ? (
                <div>Internal Error</div>
              ) : (
                tutorials.sections.map((section) => {
                  return (
                    <ListGroup key={section.slug}>
                      <ListGroup.Item>{section.title}</ListGroup.Item>
                      {section.pages.map((page) => {
                        return (
                          <ListGroup.Item key={page.slug}>
                            <Link
                              to={`/tutorial/${match.params.slug}/${section.slug}/${page.slug}`}
                            >
                              {page.title}
                            </Link>
                          </ListGroup.Item>
                        );
                      })}
                    </ListGroup>
                  );
                })
              )}
            </aside>
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
