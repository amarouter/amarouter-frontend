import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Navbar,
  NavDropdown,
  Button,
  ButtonGroup,
  Dropdown,
  DropdownButton,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

import { signOut } from "../actions/userActions";
import Logo from "./Logo";

const Header = () => {
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const [ tutorials, setTutorials ] = useState([]);

  useEffect(() => {
    setTutorials([
      {
        title: "JavaScript",
        slug: "javascript"
      },
      {
        title: "Python",
        slug: "python"
      },
      {
        title: "SQL",
        slug: "sql"
      },
    ])
  }, [tutorials])

  const signoutHandler = (e) => {
    dispatch(signOut());
  };

  return (
    <header className="App-header pt-4">
      <Navbar expand="lg">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarsExample07">
            {userInfo ? (
              <LinkContainer to="/dashboard">
                <Navbar.Brand>
                  <Logo />
                </Navbar.Brand>
              </LinkContainer>
            ) : (
              <div></div>
            )}
            <ul className="navbar-nav ml-auto mr-2">
              <li className="nav-item active">
                <InputGroup>
                  <FormControl
                    id="txtSearch"
                    placeholder="Amarouter'da arama yapın"
                    aria-label="Search"
                    aria-describedby="basic-addon1"
                  />
                  <Button variant="outline-light" className="ama-bg-primary">
                    <BsSearch />
                  </Button>
                </InputGroup>
              </li>
            </ul>
            <DropdownButton
              as={ButtonGroup}
              id="dropdown-basic-button"
              variant="outline-light"
              title="Rehberler"
              className="ml-4"
              size="lg"
            >
              {tutorials.map((item, index) => (
                <Dropdown.Item key={index}>
                  <Link to={`/tutorial/${item.slug}`}>{item.title}</Link>
                </Dropdown.Item>))}
            </DropdownButton>
            <Link to="/blog">
              <Button variant="outline-light" className="ml-4" size="lg">
                Blog
              </Button>
            </Link>
            {userInfo ? (
              <NavDropdown title={userInfo.email} id="username">
                <LinkContainer to="/profile">
                  <NavDropdown.Item>Profil</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/">
                  <NavDropdown.Item onClick={signoutHandler}>
                    Çıkış Yap
                  </NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            ) : (
              <Link to="/">
                <Button variant="outline-light" className="ml-4" size="lg">
                  Giriş Yap
                </Button>
              </Link>
            )}
          </div>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
