import { useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useLocation } from "react-router-dom";

import { listTutorials, listTutorialPage } from "../../store/features";
import Loader from "../particles/Loader";
import Message from "../particles/Message";

const TutorialDetailAside = () => {
  const { pageSlug, sectionSlug, slug } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const tutorialListSelector = useSelector((state) => state.tutorialList);
  const { loading, error, tutorials } = tutorialListSelector;

  useEffect(() => {
    dispatch(listTutorials(slug));
    if (pageSlug) {
      dispatch(listTutorialPage({ pageSlug, sectionSlug, slug }));
    }
  }, [dispatch, pageSlug, sectionSlug, slug]);

  return (
    <aside>
      <h3>Menu</h3>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : !tutorials ||
        !Object.prototype.hasOwnProperty.call(tutorials, "sections") ? (
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
                      location.pathname ===
                      `/tutorial/${slug}/${section.slug}/${page.slug}`
                        ? "active"
                        : null
                    }
                  >
                    <Link to={`/tutorial/${slug}/${section.slug}/${page.slug}`}>
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
