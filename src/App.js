import React from "react";
import { Route, Switch } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import Blog from "./screens/Blog";
import BlogPost from "./screens/BlogPost";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={BlogPost} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
