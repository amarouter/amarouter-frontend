import React from 'react';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                
                
               
                <div className="collapse navbar-collapse" id="navbarsExample07">
                    <ul className="navbar-nav ml-auto mr-2">
                        <li className="nav-item active ml-2">
                            
                        </li>
                    </ul>
                    <Button variant="outline-light">Amarouter'da arama yapın</Button>

                    <Button variant="outline-light">Blog</Button>
                </div>
            </div>
        </nav>
    )
}
