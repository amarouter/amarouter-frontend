import { useEffect } from "react";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";
import Row from "react-bootstrap/Row";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import "firebaseui/dist/firebaseui.css";

import { ui, uiConfig } from "../firebase/firebaseConfig";
import Header from "../components/particles/Header";
import Logo from "../components/particles/Logo";
import javaScriptLogo from "../images/JavaScriptLogo.png";
import pythonLogo from "../images/pythonLogo.png";
import sqlLogo from "../images/sqlLogo.png";
import RehberlerPhoto from "../images/RehberlerPhoto.png";
import BlogPhoto from "../images/BlogPhoto.png";

const HomeScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const redirect = location.search
    ? location.search.split("=")[1]
    : "/dashboard";

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  // "Sign in with Google" yazisi yerine "Continue with Google" yazisi gelmesi icin.

  useEffect(() => {
    ui.start("#firebaseui-auth-container", uiConfig);

    setTimeout(() => {
      let signInText = document.getElementsByClassName("firebaseui-idp-text");

      for (let index = 0; index < signInText.length; index++) {
        const element = signInText[index];

        element.innerHTML = element.innerHTML.replace("Sign in", "Continue");
      }
    }, 200);
  }, []);

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, navigate, redirect]);

  return (
    <div className="Home-page">
      <Header />
      <div className="main">
        <div className="App-section">
          <div className="container-fluid">
            <Row>
              <Col sm={1}></Col>
              <Col className="pt-4" sm={4}>
                <Row className="justify-content-md-center mb-5">
                  <Logo />
                </Row>
                <Row className="justify-content-md-center">
                  <div id="firebaseui-auth-container"></div>
                </Row>
              </Col>
              <Col sm={7}></Col>
            </Row>
          </div>
        </div>
        <section className="App-section2 pt-5 pb-5">
          <br />
          <br />
          <div className="container">
            <Row className="justify-content-md-center mb-5">
              <h3>Popüler kursları Öğrenmek için doğru yerdesiniz.</h3>
            </Row>
            <Row id="rowLogo" className="mb-5">
              <Col xs={4} md={4}>
                <Figure>
                  <Figure.Image
                    width={100}
                    height={100}
                    alt="JavaScript"
                    src={javaScriptLogo}
                  />
                  <Figure.Caption>JavaScript</Figure.Caption>
                </Figure>
              </Col>
              <Col xs={4} md={4}>
                <Figure>
                  <Figure.Image
                    width={100}
                    height={100}
                    alt="Python"
                    src={pythonLogo}
                  />
                  <Figure.Caption>Python</Figure.Caption>
                </Figure>
              </Col>
              <Col xs={4} md={4}>
                <Figure>
                  <Figure.Image
                    width={100}
                    height={100}
                    alt="SQL"
                    src={sqlLogo}
                  />
                  <Figure.Caption>SQL</Figure.Caption>
                </Figure>
              </Col>
            </Row>
            <Row id="rowPhoto">
              <Col xs={6} md={6}>
                <Figure>
                  <Figure.Image
                    width={250}
                    height={250}
                    alt="JavaScript"
                    src={RehberlerPhoto}
                  />
                  <div>REHBERLER</div>
                  <Figure.Caption>
                    Başucu kitabı niteliğindeki Rehberler sayesinde nokta atışı
                    araştırmalar yapın.
                  </Figure.Caption>
                </Figure>
              </Col>
              <Col xs={6} md={6}>
                <Figure>
                  <Figure.Image
                    width={250}
                    height={250}
                    alt="JavaScript"
                    src={BlogPhoto}
                  />
                  <div>BLOG YAZILARI</div>
                  <Figure.Caption>
                    Özenle hazırlanmış Blog yazılarıyla vizyonunuzu genişletin.
                  </Figure.Caption>
                </Figure>
              </Col>
            </Row>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeScreen;
