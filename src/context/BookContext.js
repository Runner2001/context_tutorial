import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
    const [books, setBooks] = useState([
        { title: 'Name Of The Wind', id: 1 },
        { title: 'The Way Of The Kings', id: 2 },
        { title: 'The Final Though', id: 3 }
    ]);
    return (
        <BookContext.Provider value={{ books }}>
            {children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;