import React from 'react';
import './App.css';

import Container from 'react-bootstrap/Container';

import Header from './components/header/Header';
import LandingContent from './components/landing-content/LandingContent';
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
