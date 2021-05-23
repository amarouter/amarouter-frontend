import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Spinner, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { signUp } from "../actions/userActions";
import Logo from "../components/Logo";

const SignUp= ({ location, history }) => {
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
    dispatch(signUp(email, password));
  };

  return (
    <section>
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
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>E-posta</Form.Label>
            <Form.Control
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Şifre</Form.Label>
            <Form.Control
              required
              type="password"
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
      </div>
    </section>
  );
};

export default SignUp;
