import React from "react";

import {
  Button,
  Form,
  FormControl,
  Navbar,
  Container,
  Row,
  Nav,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import Logo from "../Logo";

export default function Header() {
  return (
    <header className="App-header">
      <Navbar bg="black" variant="black">
        <Navbar.Brand>
          <Logo />
        </Navbar.Brand>
        <Nav className="mr-auto"></Nav>
        <Link to="">
          <Button variant="outline-light" className="ml-4" size="lg">
            Giriş Yap
          </Button>
        </Link>
      </Navbar>
    </header>
  );
}
