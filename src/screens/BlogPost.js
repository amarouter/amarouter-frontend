import React, { useState, useEffect } from "react";

import axios from "axios";

import Header from "../components/Header";

const BlogPost = () => {
  const [post, setPost] = useState({});

  useEffect(() => {
    async function fetchPost() {
      // "http://127.0.0.1:8000/blog/post/javascript-giris"
      let pathname = window.location.pathname;
      pathname = pathname.split('/');
      pathname = pathname[2];
      const data = await axios.get(`http://127.0.0.1:8000/blog/post/${pathname}`);
      setPost(data.data);
    }
    fetchPost();
  }, {})

  return (
    <div className="blog-post">
      <Header />
      <h3>{post.title}</h3>
      <article>
        {post.text}
      </article>
    </div>
  );
};

export default BlogPost;
