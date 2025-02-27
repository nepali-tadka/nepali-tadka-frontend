import { jwtDecode } from "jwt-decode";
import React, { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [authenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      try {
        const decodedToken = jwtDecode(storedToken);
        setIsAuthenticated(true);
        setUser(decodedToken.user);
      } catch (error) {
        console.error("Error decoding token:", error);
        setIsAuthenticated(false);
        setUser(null);
      }
    }
    setLoading(false);
  }, []);

  const signIn = (jwtToken) => {
    try {
      const decodedToken = jwtDecode(jwtToken);
      localStorage.setItem("token", jwtToken);
      setIsAuthenticated(true);
      setUser(decodedToken.user);
    } catch (error) {
      console.error("Error decoding token:", error);
      setIsAuthenticated(false);
      setUser(null);
    }
  };

  const signOut = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUser(null);
  };

  const getUser = () => {
    return user;
  };

  const value = {
    authenticated,
    getUser,
    signIn,
    signOut,
    loading,
  };

  return <AuthContext.Provider value={value} {...props} />;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
