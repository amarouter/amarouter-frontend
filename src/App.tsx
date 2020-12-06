import React from 'react';

import Container from 'react-bootstrap/Container';

import './App.css';
import Header from './components/header/Header';
import LandingContent from './components/main/Main';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <LandingContent />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
