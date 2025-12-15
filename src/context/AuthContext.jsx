import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const token = localStorage.getItem("authToken");
    return !!token;
  });

  const navigate = useNavigate();

  const login = (username) => {
    const fakeToken = `fake-token-${username}`;
    localStorage.setItem("authToken", fakeToken);
    setUser(username);
    setIsAuthenticated(true);
  };

  const logout = () => {
    navigate("/");
    localStorage.removeItem("authToken");
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
