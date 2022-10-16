import React, { useEffect, useState } from "react";

const BasicHookUseEffect2 = () => {
  const [title, setTitle] = useState("React App Example");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    document.title = title;
    return () => {
      document.title = "React App";
    };
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => setPosts(posts));

    return () => setPosts([]);
  }, []);

  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title} <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BasicHookUseEffect2;
