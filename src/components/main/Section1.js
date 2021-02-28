import React from "react";

import { Row, Col, Button, Form } from "react-bootstrap";

import Logo from "../Logo";
import Header from "../header/Header";

function Section1() {
  return (
    <div className="App-section">
      <div className="container-fluid">
        <Row className="mb-5">
          <Header />
        </Row>
        <Row>
          <Col sm={1}></Col>
          <Col sm={4}>
            <Row className="justify-content-md-center mb-5">
              <Logo />
            </Row>
            <Form id="formLogin">
              <Form.Group controlId="formBasicEmail" className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="E-posta veya Kullanıcı Adı"
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Şifre" />
              </Form.Group>
              <Button
                id="btnGirisYap"
                variant="primary"
                className="ama-bg-primary mt-4 mb-3"
                type="submit"
                size="lg"
              >
                Giriş Yap
              </Button>
              <a id="aForgotPassword" href="#">
                Şifreni mi Unuttun?
              </a>
            </Form>
            <br></br>
            <Row className="justify-content-md-center">
              <Button id="btnHesapOlustur" variant="secondary" size="lg">
                Yeni Hesap Oluştur
              </Button>
            </Row>
          </Col>
          <Col sm={7}></Col>
        </Row>
      </div>
    </div>
  );
}

export default Section1;
