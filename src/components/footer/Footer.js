import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

import Logo from '../Logo';

export default function Footer() {
    return (
        <footer className="App-footer">
            <Container>
                <Row>
                    <Col><Logo /></Col>
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
                    <Col><h5>Bizi Takip Edin</h5></Col>
                </Row>
            </Container>
        </footer>
    )
}
