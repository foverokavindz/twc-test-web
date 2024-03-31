import React, { useContext, useEffect, useState } from 'react';
import { createContext } from 'react';

// The AuthContext component provides the authentication context for the application.
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [userData, setUserdata] = useState(null);
  const [isAuthentiated, setIsAuthenticated] = useState(false);
  const storedData = JSON.parse(localStorage.getItem('user_data'));

  // The useEffect hook checks if the user data is stored in local storage and sets the user token and data in state.
  useEffect(() => {
    if (storedData) {
      const { userToken, user } = storedData;
      setToken(userToken);
      setUserdata(user);
      setIsAuthenticated(true);
    }
  }, []);

  // The login function sets the user token and data in local storage and sets the user token and data in state.
  const login = (newToken, newData) => {
    localStorage.setItem(
      'user_data',
      JSON.stringify({ userToken: newToken, user: newData })
    );

    setToken(newToken);
    setUserdata(newData);
    setIsAuthenticated(true);
  };

  // The logout function removes the user token and data from local storage and sets the user token and data in state to null.
  const logout = () => {
    localStorage.removeItem('user_data');
    setToken(null);
    setUserdata(null);
    setIsAuthenticated(false);
  };

  // The contextValue object contains the token, isAuthenticated, userData, login, and logout values.
  const contextValue = {
    token,
    isAuthentiated,
    userData,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

// The useAuth hook returns the authentication context.
export const useAuth = () => useContext(AuthContext);
