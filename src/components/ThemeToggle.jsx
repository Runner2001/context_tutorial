import { ThemeContext } from "../context/ThemeContext";
import React, { useContext } from "react";

const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return <button onClick={toggleTheme}>Toggle Button</button>;
};

export default ThemeToggle;
