import React from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { auth } from "./firebase/firebaseConfig";
import { signIn } from "./actions/userActions";
import HomeScreen from "./screens/HomeScreen";
import Dashboard from "./screens/Dashboard";
import Profile from "./screens/Profile";
import Tutorial from "./screens/Tutorial";
import Blog from "./screens/Blog";
import BlogPostDetail from "./screens/BlogPostDetail";
import Footer from "./components/particles/Footer";
import NotFound from "./components/particles/NotFound";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  auth.onAuthStateChanged(function (user) {
    if (user) {
      dispatch(signIn(user));
    } else {
      // omitted
    }
  });

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/dashboard" component={Dashboard} exact />
          <Route path="/profile" component={Profile} exact />
          <Route path="/blog" component={Blog} exact />
          <Route
            path="/tutorial/:slug/:sectionSlug/:pageSlug"
            component={Tutorial}
          />
          <Route path="/tutorial/:slug" component={Tutorial} />
          <Route path="/blog/:slug" component={BlogPostDetail} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
