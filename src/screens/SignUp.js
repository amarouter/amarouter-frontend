import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Alert,
  Spinner,
  Container,
  Row,
  Col,
  Form,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import { signUp } from "../actions/userActions";
import Logo from "../components/Logo";

const SignUp = ({ location, history }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // location.search normalde bos string olarak gelir.
  const redirect = location.search
    ? location.search.split("=")[1]
    : "/dashboard";

  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const userSignup = useSelector((state) => state.userSignup);
  const { error, loading } = userSignup;

  useEffect(() => {
    if (userInfo) {
      // userInfo varsa yukarida tanimlanan redirect konumuna gidilir.
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signUp({ email, password, name, surname, username }));
  };

  return (
    <Container>
      {error && (
        <div>
          <Alert variant={"danger"}>
            Kaydolma sırasında hata meydana geldi! Tekrar deneyebilirsin!
          </Alert>
          <Alert variant={"danger"}>{error}</Alert>
        </div>
      )}
      {loading && <Spinner animation="border" />}
      <div className="form-card">
        <Row className="justify-content-md-center">
          <Logo />
        </Row>
        <Row>
          <Col sm={6}>
            <Form onSubmit={submitHandler}>
              <Form.Group controlId="formBasicFullname">
                <Row>
                  <Col>
                    <Form.Group controlId="formBasicName">
                      <Form.Control
                        required
                        type="text"
                        placeholder="İsim"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formBasicSurname">
                      <Form.Control
                        required
                        type="text"
                        placeholder="Soyisim"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Form.Group>

              <Form.Group controlId="formBasicUsername">
                <Form.Control
                  required
                  type="text"
                  placeholder="Kullanıcı adı"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  required
                  type="email"
                  placeholder="E-posta"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  required
                  type="password"
                  placeholder="Şifre"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Button
                id="btnHesapOlustur"
                variant="warning"
                size="lg"
                type="submit"
              >
                Kaydol
              </Button>
            </Form>

            <p>
              Zaten hesabın varsa{" "}
              <Link to="/">
                <span>giriş yapabilirsin!</span>
              </Link>
            </p>
          </Col>
          <Col sm={6} />
        </Row>
      </div>
    </Container>
  );
};

export default SignUp;
