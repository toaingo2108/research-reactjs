import React, { useContext } from "react";
import { ThemeContext } from "./example-1";

const ComponentB = () => {
  const theme = useContext(ThemeContext);

  return <div>{theme}</div>;
};

export default ComponentB;
