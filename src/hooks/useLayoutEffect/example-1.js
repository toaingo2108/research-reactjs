import React, { useEffect, useLayoutEffect, useState } from "react";

const BasicHookUseLayoutEffect1 = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  // useEffect(() => {
  //   if (count > 3) {
  //     console.log(count);
  //     setCount(0);
  //   }
  // }, [count]);

  useLayoutEffect(() => {
    if (count > 3) {
      console.log(count);
      setCount(0);
    }
  }, [count]);

  useEffect(() => {
    setData([...data, count]);
  }, [count]);

  const handleRun = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleRun}>Run</button>
      <ul>{data.map((i) => i)}</ul>
    </div>
  );
};

export default BasicHookUseLayoutEffect1;
