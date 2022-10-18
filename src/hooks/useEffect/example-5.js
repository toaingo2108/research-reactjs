import React, { useEffect, useState } from "react";

const BasicHookUseEffect5 = () => {
  const [countDown, setCountDown] = useState(180);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCountDown((prevState) => prevState - 1);
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return <div>{countDown}</div>;
};

export default BasicHookUseEffect5;
