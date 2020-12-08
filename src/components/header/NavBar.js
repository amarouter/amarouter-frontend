import React from 'react';

import Button from 'react-bootstrap/Button';

import Logo from '../Logo';

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <Logo />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample07">
                    <ul className="navbar-nav ml-auto mr-2">
                        <li className="nav-item active">
                            <p>JavaScript</p>
                        </li>
                        <li className="nav-item active ml-2">
                            <p>Python</p>
                        </li>
                    </ul>
                    <Button variant="info">Giriş Yap</Button>
                </div>
            </div>
        </nav>
    )
}
