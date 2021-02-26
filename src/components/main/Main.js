import React from "react";
import { Row, Col, Form, Card, Image, Figure } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";

import javaScriptLogo from "../../images/JavaScriptLogo.png";
import pythonLogo from "../../images/pythonLogo.png";
import Logo from "../Logo";
import VideoPhoto from "../../images/VideoPhoto.png";
import RehberlerPhoto from "../../images/RehberlerPhoto.png";
import BlogPhoto from "../../images/BlogPhoto.png";
import CeviriPhoto from "../../images/CeviriPhoto.png";

export default function Main() {
  return (
    <Container>
      <section className="App-section">
        <Col sm={1}></Col>
        <Col sm={4}>
          <Row>
            <Logo />
          </Row>
          <br></br>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="E-posta veya Kullanıcı Adı"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Şifre" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Giriş Yap
            </Button>
          </Form>
          <br></br>
          <Row>
            <Button variant="secondary">Yeni Hesap Oluştur</Button>
          </Row>
        </Col>
        <Col sm={7}></Col>
      </section>
      <section className="App-section2">
        <Row>
          <h3>Popüler kursları öğrenmek için doğru yerdesiniz </h3>
        </Row>

        <Row>
          <Col xs={6} md={4}>
            <Figure>
              <Figure.Image
                width={100}
                height={100}
                alt="JavaScript"
                src={javaScriptLogo}
              />
              <Figure.Caption>
                JavaScript
              </Figure.Caption>
            </Figure>
          </Col>
          <Col xs={6} md={4}>
          <Figure>
              <Figure.Image
                width={100}
                height={100}
                alt="JavaScript"
                src={javaScriptLogo}
              />
              <Figure.Caption>
                JavaScript
              </Figure.Caption>
            </Figure>
          </Col>
          <Col xs={6} md={4}>
          <Figure>
              <Figure.Image
                width={100}
                height={100}
                alt="JavaScript"
                src={javaScriptLogo}
              />
              <Figure.Caption>
                JavaScript
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col xs={3} md={3}>
          <Figure>
              <Figure.Image
                width={200}
                height={200}
                alt="JavaScript"
                src={RehberlerPhoto}
              />
              <Figure.Caption>
                JavaScript
              </Figure.Caption>
            </Figure>
          </Col>
          <Col xs={3} md={3}>
          <Figure>
              <Figure.Image
                width={200}
                height={200}
                alt="JavaScript"
                src={VideoPhoto}
              />
              <Figure.Caption>
                JavaScript
              </Figure.Caption>
            </Figure>
          </Col>
          <Col xs={3} md={3}>
          <Figure>
              <Figure.Image
                width={200}
                height={200}
                alt="JavaScript"
                src={BlogPhoto}
              />
              <Figure.Caption>
                JavaScript
              </Figure.Caption>
            </Figure>
          </Col>
          <Col xs={3} md={3}>
          <Figure>
              <Figure.Image
                width={200}
                height={200}
                alt="JavaScript"
                src={CeviriPhoto}
              />
              <Figure.Caption>
                JavaScript
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>
      </section>
      <br></br>
      <br></br>
    </Container>
  );
}
