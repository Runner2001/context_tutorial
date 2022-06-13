import { ThemeContext } from "../context/ThemeContext";
import React, { Component } from "react";

class ThemeToggle extends Component {
  static contextType = ThemeContext;
  render() {
    const { toggleTheme } = this.context;
    return <button onClick={toggleTheme}>Toggle Button</button>;
  }
}

export default ThemeToggle;
