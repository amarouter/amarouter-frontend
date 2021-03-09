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
import { BsSearch } from "react-icons/bs";

import Logo from "../Logo";
import logo2 from "../../logo2.png";

import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
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
    </>
  );
}
