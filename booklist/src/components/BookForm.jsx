import React, { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";

const BookForm = () => {
  const { addBook } = useContext(BookContext);
  const [userInput, setUserInput] = useState({
    title: "",
    author: "",
  });
  const formInput = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };
  const submitForm = (e) => {
    e.preventDefault();
    addBook(userInput.title, userInput.author);
    setUserInput({
      title: "",
      author: "",
    });
  };
  return (
    <form onSubmit={submitForm}>
      <input
        type="text"
        name="title"
        placeholder="Book Title"
        value={userInput.title}
        onChange={formInput}
      />
      <input
        type="text"
        name="author"
        placeholder="Book Author"
        value={userInput.author}
        onChange={formInput}
      />
      <input type="submit" value="Submit Data" />
    </form>
  );
};

export default BookForm;
