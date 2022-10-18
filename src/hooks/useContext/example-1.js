import React, { createContext, useState } from "react";
import ComponentA from "./componentA";

export const ThemeContext = createContext();

const BasicHookUseContext1 = () => {
  const [theme, setTheme] = useState("dark");
  const handleToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <button onClick={handleToggleTheme}>Toggle theme</button>
        <ComponentA />
      </div>
    </ThemeContext.Provider>
  );
};

export default BasicHookUseContext1;
