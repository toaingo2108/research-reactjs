import React, { useRef, useState } from "react";

const BasicHookUseRef1 = () => {
  const [count, setCount] = useState(60);

  // let timerId
  // const handleStart = () => {
  //   timerId = setInterval(() => {
  //     setCount((prevCount) => prevCount - 1);
  //   }, 1000);
  // };
  // const handleStop = () => {
  //   clearInterval(timerId)
  // };

  // useRef
  const ref = useRef();
  console.log(ref);

  const handleStart = () => {
    ref.current = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(ref.current);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default BasicHookUseRef1;
