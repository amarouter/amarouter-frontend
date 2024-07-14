import { collection, getDocs } from "firebase/firestore";
import { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import { BsSearch } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

import { signOut } from "../../store/features";
import Logo from "./Logo";

import { db } from "../../firebase/firebaseConfig";

const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    getDocs(collection(db, "tutorials"))
      .then((querySnapshot) => {
        let tentativeArray = [];
        querySnapshot.forEach((doc) => {
          tentativeArray.push({ id: doc.id, ...doc.data() });
        });
        setTutorials([...tentativeArray]);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, []);

  const signoutHandler = () => {
    dispatch(signOut());
  };

  return (
    <header className="App-header pt-3">
      <Navbar expand="sm">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-light navbar-toggler" />
          <Navbar.Collapse className="justify-content-end me-5">
            {userInfo ? (
              <LinkContainer to="/dashboard">
                <Navbar.Brand>
                  <Logo />
                </Navbar.Brand>
              </LinkContainer>
            ) : (
              <Fragment />
            )}
            {/* <ul className="navbar-nav ms-auto me-2">
              <li className="nav-item active">
                // from react-bootstrap
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
            </ul> */}
            <DropdownButton
              as={ButtonGroup}
              id="dropdown-basic-button"
              variant="outline-light"
              title="Rehberler"
              size="lg"
              className="me-4"
            >
              {tutorials.map((item, index) => (
                <LinkContainer to={`/tutorial/${item.slug}`} key={index}>
                  <Dropdown.Item>{item.title}</Dropdown.Item>
                </LinkContainer>
              ))}
            </DropdownButton>
            <Link to="/blog">
              <Button variant="outline-light" size="lg">
                Blog
              </Button>
            </Link>
            {userInfo ? (
              <NavDropdown title={userInfo.email} id="username" className="ms-4">
                <LinkContainer to="/profile">
                  <NavDropdown.Item>Profil</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/">
                  <NavDropdown.Item onClick={signoutHandler}>
                    Çıkış Yap
                  </NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            ) : location.pathname === "/" ? (
              <Fragment />
            ) : (
              <Link to="/" className="ms-4">
                <Button variant="outline-light" size="lg">
                  Giriş Yap
                </Button>
              </Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
