import React, { createContext, useState } from 'react';

export const AuthContext = createContext();


const AuthContextProvider = ({ children }) => {
    const [isAuthentiated, setIsAuthentiated] = useState(false);

    const toggleAuth = () => {
        setIsAuthentiated(!isAuthentiated)
    }
    return (
        <AuthContext.Provider value={{ isAuthentiated, toggleAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider