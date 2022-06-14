import React, { createContext, useEffect, useState } from 'react';

export const BookContext = createContext();


const localData = localStorage.getItem('books');
const initial = localData ? JSON.parse(localData) : [];

const BookContextProvider = ({ children }) => {
    const [books, setBooks] = useState(initial);
    const addBook = (title, author) => {
        setBooks([...books, { title, author, id: books.length }]);
    }
    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id))
    }
    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books));
    }, [books])

    return (
        <BookContext.Provider value={{ books, addBook, removeBook }}>
            {children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;