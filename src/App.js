import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <section className="App-section">
        <Header />
      </section>
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
