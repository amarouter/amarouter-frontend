import React from 'react';

import Container from 'react-bootstrap/Container';

import './static/css/App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Main />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
