import React from "react";

import { Container, Row, Col, Button, Form, Card, Image, Figure } from "react-bootstrap";

import Logo from "../Logo";
import Header from "../header/Header";

function Section1() {
  return (
    <div className="App-section mb-5">
      <div className="container-fluid">
        <Row className="mb-5">
          <Header />
        </Row>
        <Row>
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
        </Row>
      </div>
    </div>
  );
}

export default Section1;
