import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

import Logo from '../Logo';

export default function Footer() {
    return (
        <footer className="App-footer">
            <Container>
                <Row>
                    <Col><Logo /></Col>
                    <Col><h5>İçerik</h5></Col>
                    <Col><h5>Hakkımızda</h5></Col>
                    <Col md={3}>
                        <h5>Kurslar</h5>
                        <ul className="list-unstyled text-small">
                            <li>JavaScript</li>
                            <li>Python</li>
                        </ul>
                    </Col>
                    <Col><h5>İletişim</h5></Col>
                </Row>
            </Container>
        </footer>
    )
}
