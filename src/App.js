import React from "react";

import Main from "./components/main/Main";
import Blog from "./components/blog/Blog";
import Footer from "./components/footer/Footer";

import "./App.css";
import { Route, Switch } from "react-router-dom";
import NotFound from "./components/notfound/NotFound";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/blog" component={Blog} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
