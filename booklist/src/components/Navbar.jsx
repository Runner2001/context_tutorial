import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h2>Your Reading List</h2>
      <p>Currently you have {books.length} books..</p>
    </div>
  );
};

export default Navbar;
