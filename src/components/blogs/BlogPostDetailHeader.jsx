import { format } from "date-fns";
import trLocale from "date-fns/locale/tr";
import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Figure from "react-bootstrap/Figure";
import Row from "react-bootstrap/Row";

import { db } from "../../firebase/firebaseConfig";

/* eslint-disable-next-line react/prop-types */
const BlogPostDetailHeader = ({ authorId, title, readTime, createdAt }) => {
  const [author, setAuthor] = useState({ name: "", surname: "" });

  useEffect(() => {
    const docRef = doc(db, "amarouter_users", authorId);

    getDoc(docRef)
      .then((doc) => {
        if (doc.exists) {
          setAuthor(doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [authorId]);

  return (
    <section className="blog-post-detail-section">
      <Container>
        <Row>
          <Col className="mt-5" xs="12" sm="3">
            <Figure>
              <Figure.Image className="blog-post-detail-figure-image" />
              <Figure.Caption className="blog-post-detail-figure-image-caption">
                {`${author.name} ${author.surname}`}
              </Figure.Caption>
            </Figure>
          </Col>
          <Col className="mt-5" xs="12" sm="9">
            <Row>
              <h1>{title}</h1>
            </Row>
            <Row>
              <div className="blog-post-detail-info">
                <span>
                  {createdAt
                    ? format(new Date(createdAt), "dd MMMM yyyy", {
                        locale: trLocale,
                      })
                    : ""}
                </span>
                <span>{readTime} Min read</span>
                <span>1.907 Views</span>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogPostDetailHeader;
