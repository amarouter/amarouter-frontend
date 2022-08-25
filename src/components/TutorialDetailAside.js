import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

import { listTutorials, listTutorialPage } from "../actions/tutorialActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

const TutorialDetailAside = ({ match }) => {
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
            <ListGroup as="ul" key={section.slug}>
              <ListGroup.Item>{section.title}</ListGroup.Item>
              {section.pages.map((page) => {
                return (
                  <ListGroup.Item
                    as="li"
                    key={page.slug}
                    className={
                      window.location.pathname ===
                      `/tutorial/${match.params.slug}/${section.slug}/${page.slug}`
                        ? "active"
                        : null
                    }
                  >
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
  );
};

export default TutorialDetailAside;
