import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import SignUp from "./screens/SignUp";
import Dashboard from "./screens/Dashboard";
import Profile from "./screens/Profile";
import Blog from "./screens/Blog";
import BlogPost from "./screens/BlogPost";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/signup" component={SignUp} exact />
          <Route path="/dashboard" component={Dashboard} exact />
          <Route path="/profile" component={Profile} exact />
          <Route path="/blog" component={Blog} exact />
          <Route path="/blog/:slug" component={BlogPost} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
