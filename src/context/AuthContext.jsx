import React, { useContext, useEffect } from 'react';
import { createContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [userData, setUserdata] = useState(null);
  const [isAuthentiated, setIsAuthenticated] = useState(false);
  const storedData = JSON.parse(localStorage.getItem('user_data'));

  useEffect(() => {
    if (storedData) {
      const { userToken, user } = storedData;
      setToken(userToken);
      setUserdata(user);
      setIsAuthenticated(true);
    }
  }, []);

  const login = (newToken, newData) => {
    localStorage.setItem(
      'user_data',
      JSON.stringify({ userToken: newToken, user: newData })
    );

    setToken(newToken);
    setUserdata(newData);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('user_data');
    setToken(null);
    setUserdata(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={(token, isAuthentiated, login, logout, userData)}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
