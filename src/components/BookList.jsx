import React, { Component } from "react";
import { ThemeContext } from "../context/ThemeContext";

class BookList extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(context) => {
          const { isLightTheme, light, dark } = context;
          const theme = isLightTheme ? light : dark;
          <div
            className="book-list"
            style={{ background: theme.bg, color: theme.syntax }}
          >
            <ul>
              <li style={{ background: theme.ui }}>The Way of the kings</li>
              <li style={{ background: theme.ui }}>Harry Potter</li>
              <li style={{ background: theme.ui }}>Road of Mario</li>
            </ul>
          </div>;
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default BookList;
