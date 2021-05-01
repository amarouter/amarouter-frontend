import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaYoutube, FaLinkedin, FaTwitter } from "react-icons/fa";

import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="App-footer pt-3">
      <Container>
        <Row>
          <Col md={3}>
            <Logo />
          </Col>
          <Col md={3}>
            <h5>Kategoriler</h5>
            <ul className="list-unstyled text-small">
              <li>Rehberler</li>
              <li>Video Kurslar</li>
              <li>Blog</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>İletişim</h5>
            <ul className="list-unstyled text-small">
              <li>Hakkımızda</li>
              <li>Bize Ulaşın</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Bizi Takip Edin</h5>
            <ul className="list-unstyled text-small horizontal-list">
              <li><a href="https://github.com/amarouter" target="_blank" rel="noreferrer"><FaGithub /></a></li>
              <li><a href="https://www.youtube.com/channel/UC6179yTWBNkRatwNxntGMrQ" target="_blank" rel="noreferrer"><FaYoutube /></a></li>
              <li><a href="https://www.linkedin.com/in/amarouter/" target="_blank" rel="noreferrer"><FaLinkedin /></a></li>
              <li><a href="https://twitter.com/amarouterorg" target="_blank" rel="noreferrer"><FaTwitter /></a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
