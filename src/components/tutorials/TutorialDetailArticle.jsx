import ReactMarkdown from "react-markdown";
import { useSelector } from "react-redux";

import Loader from "../particles/Loader";
import Message from "../particles/Message";

// eslint-disable-next-line react/prop-types
const TutorialDetailArticle = ({ error }) => {
  const tutorialPageSelector = useSelector((state) => state.tutorialPage);
  const {
    loading: pageLoading,
    error: pageError,
    tutorialPage,
  } = tutorialPageSelector;

  return (
    <section>
      {pageLoading ? (
        <Loader />
      ) : pageError ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <article>
          <ReactMarkdown>{tutorialPage.text}</ReactMarkdown>
        </article>
      )}
    </section>
  );
};

export default TutorialDetailArticle;
