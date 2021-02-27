import React from "react";

import { Row, Col, Button, Form, Card, Image, Figure } from "react-bootstrap";

import javaScriptLogo from "../../images/JavaScriptLogo.png";
import pythonLogo from "../../images/pythonLogo.png";
import VideoPhoto from "../../images/VideoPhoto.png";
import RehberlerPhoto from "../../images/RehberlerPhoto.png";
import BlogPhoto from "../../images/BlogPhoto.png";
import CeviriPhoto from "../../images/CeviriPhoto.png";

function Section1() {
  return (
    <section className="App-section2 mt-5">
      <br />
      <br />
      <div className="container">
        <Row className="mb-5">
          <h3>Popüler kursları öğrenmek için doğru yerdesiniz </h3>
        </Row>
        <Row className="mb-5">
          <Figure xs={4} md={4}>
            <Figure.Image
              width={100}
              height={100}
              alt="JavaScript"
              src={javaScriptLogo}
            />
            <Figure.Caption>JavaScript</Figure.Caption>
          </Figure>
          <Figure xs={4} md={4}>
            <Figure.Image
              width={100}
              height={100}
              alt="JavaScript"
              src={javaScriptLogo}
            />
            <Figure.Caption>JavaScript</Figure.Caption>
          </Figure>
          <Figure xs={4} md={4}>
            <Figure.Image
              width={100}
              height={100}
              alt="JavaScript"
              src={javaScriptLogo}
            />
            <Figure.Caption>JavaScript</Figure.Caption>
          </Figure>
        </Row>
        <Row>
          <Col xs={6} md={3}>
            <Figure>
              <Figure.Image
                width={200}
                height={200}
                alt="JavaScript"
                src={RehberlerPhoto}
              />
              <Figure.Caption>JavaScript</Figure.Caption>
            </Figure>
          </Col>
          <Col xs={6} md={3}>
            <Figure>
              <Figure.Image
                width={200}
                height={200}
                alt="JavaScript"
                src={VideoPhoto}
              />
              <Figure.Caption>JavaScript</Figure.Caption>
            </Figure>
          </Col>
          <Col xs={6} md={3}>
            <Figure>
              <Figure.Image
                width={200}
                height={200}
                alt="JavaScript"
                src={BlogPhoto}
              />
              <Figure.Caption>JavaScript</Figure.Caption>
            </Figure>
          </Col>
          <Col xs={6} md={3}>
            <Figure>
              <Figure.Image
                width={200}
                height={200}
                alt="JavaScript"
                src={CeviriPhoto}
              />
              <Figure.Caption>JavaScript</Figure.Caption>
            </Figure>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default Section1;
