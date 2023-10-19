import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isLoggedIn: true,
    role: "user",
    user: {
      id: 1,
    },
  });

  const contextValue = {
    auth,
    setAuth,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
