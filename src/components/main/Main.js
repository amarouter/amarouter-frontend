import React from 'react'

import { Row, Col } from 'react-bootstrap';

import pythonLogo from '../../static/img/pythonLogo.png';


export default function Main() {
    return (
        <section className="App-section">
            <Row>
                <Col md={6}>
                    <Row>
                        <aside>
                            <Col>
                                <div className="card flex-md-row mb-4 box-shadow h-md-250">
                                    <img className="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" 
                                        alt="Thumbnail [200x250]" src={pythonLogo} width="50px" height="50px"
                                        data-holder-rendered="true" />
                                    <div className="card-body d-flex flex-column align-items-start">
                                        <h3 className="mb-0">
                                            <p className="text-dark">JavaScript</p>
                                        </h3>
                                        <div className="mb-1 text-muted">öğrenmek istiyorsak tam yerindeyiz.</div>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                            <div className="card flex-md-row mb-4 box-shadow h-md-250">
                                    <img className="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" 
                                        alt="Thumbnail [200x250]" src={pythonLogo} width="50px" height="50px"
                                        data-holder-rendered="true" />
                                    <div className="card-body d-flex flex-column align-items-start">
                                        <h3 className="mb-0">
                                            <p className="text-dark">Python</p>
                                        </h3>
                                        <div className="mb-1 text-muted">öğrenmek istiyorsak tam yerindeyiz.</div>
                                    </div>
                                </div>
                            </Col>
                        </aside>
                    </Row>
                </Col>
                <Col md={6}>
                    <article>
                        <h3>Amarouter</h3>
                        <p>
                            Amarouter’a Hoşgeldiniz!!
                            Amarouter üzerinden Python ve JavaScript kurslarının tadını çıkarabilirsiniz.
                        </p>
                    </article>
                </Col>
            </Row>
        </section>
    )
}
