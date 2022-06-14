import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import BookDetail from "./BookDetail";

const BookList = () => {
  const { books } = useContext(BookContext);
  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map((book) => {
          return <BookDetail book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">Currently There Is No Books</div>
  );
};

export default BookList;
