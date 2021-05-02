import React, { useState, useEffect } from "react";

import axios from "axios";

import Header from "../components/Header";

const BlogPost = ({ match }) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    async function fetchPost() {
      const { data } = await axios.get(`http://127.0.0.1:8000/blog/post/${match.params.slug}`);
      setPost(data);
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
