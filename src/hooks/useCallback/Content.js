import React, { memo } from "react";

const Content = ({ onIncrease }) => {
  console.log("re-render Content");
  return (
    <div>
      Content
      <br />
      <button onClick={onIncrease}>Click me!</button>
    </div>
  );
};

export default memo(Content);
