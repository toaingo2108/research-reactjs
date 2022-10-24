import React, { useEffect, useState } from "react";

const tabs = ["posts", "albums", "photos"];

const BasicHookUseEffect3 = () => {
  const [type, setType] = useState("posts");
  const [title, setTitle] = useState("React App");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [type]);

  return (
    <div>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setType(tab)}
          style={
            type === tab
              ? {
                  color: "#fff",
                  backgroundColor: "#333",
                }
              : {}
          }
        >
          {tab}
        </button>
      ))}

      <input value={title} onChange={(e) => setTitle(e.target.value)} />

      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default BasicHookUseEffect3;
