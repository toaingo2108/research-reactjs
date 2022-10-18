import React, { useCallback, useState } from "react";
import Content from "./Content";

const BasicHookUseCallback1 = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <Content onIncrease={handleIncrease} />
      <h1>{count}</h1>
    </div>
  );
};

export default BasicHookUseCallback1;
