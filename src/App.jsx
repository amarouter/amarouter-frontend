import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { auth } from "./firebase/firebaseConfig";
import { signIn } from "./store/features";
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
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/blog" element={<Blog />} />
          <Route
            path="/tutorial/:slug/:sectionSlug/:pageSlug"
            element={<Tutorial />}
          />
          <Route path="/tutorial/:slug" element={<Tutorial />} />
          <Route path="/blog/:slug" element={<BlogPostDetail />} />
          <Route element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
