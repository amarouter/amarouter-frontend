import React from "react";

import { Button, InputGroup, FormControl } from "react-bootstrap";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarsExample07">
          <ul className="navbar-nav ml-auto mr-2">
            <li className="nav-item active">
              <InputGroup>
                <FormControl
                  placeholder="Amarouter'da arama yapın"
                  aria-label="Search"
                  aria-describedby="basic-addon1"
                />
                <Button variant="outline-light">
                  S
                </Button>
              </InputGroup>
            </li>
          </ul>
          <Button variant="outline-light" className="ml-4">
            Blog
          </Button>
        </div>
      </div>
    </nav>
  );
}
