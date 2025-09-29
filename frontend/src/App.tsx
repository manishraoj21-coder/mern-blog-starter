import React, { useEffect, useState } from "react";
import { fetchPosts } from "./api";

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then(setPosts);
  }, []);

  return (
    <main>
      <h1>MERN Blog Starter</h1>
      <ul>{posts.map((p) => <li key={p._id}>{p.title}</li>)}</ul>
    </main>
  );
}