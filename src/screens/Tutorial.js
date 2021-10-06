import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import { listTutorials, listTutorialPage } from "../actions/tutorialActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

const Tutorial = ({ match }) => {
  const dispatch = useDispatch();
  const tutorialListSelector = useSelector((state) => state.tutorialList);
  const { loading, error, tutorials } = tutorialListSelector;
  const tutorialPageSelector = useSelector((state) => state.tutorialPage);
  const {
    loading: pageLoading,
    error: pageError,
    tutorialPage,
  } = tutorialPageSelector;

  useEffect(() => {
    if (match.params.pageSlug) {
      dispatch(listTutorialPage(match.params));
    } else {
      dispatch(listTutorials(match.params.slug));
    }
  }, [dispatch, match.params]);

  return (
    <div className="component-blog">
      <Container fluid>
        <Row>
          <Col sm={2}>
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
                    <ListGroup>
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
          <Col sm={8}>
            <section>
              {pageLoading ? (
                <Loader />
              ) : pageError ? (
                <Message variant="danger">{error}</Message>
              ) : (
                <article>
                  <h2>{tutorialPage.title}</h2>
                  {console.log(tutorialPage.text)}
                  <ReactMarkdown children={tutorialPage.text} />
                </article>
              )}
            </section>
          </Col>
          <Col sm={2} />
        </Row>
      </Container>
    </div>
  );
};

export default Tutorial;
