import React, { useEffect, useState } from "react";

const BasicHookUseEffect = () => {
  const [title, setTitle] = useState("React App Example");

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title
    document.title = title;
    console.log("callback");

    return () => {
      document.title = "React App";
      console.log("cleanup");
    };
  });

  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
    </div>
  );
};

export default BasicHookUseEffect;
