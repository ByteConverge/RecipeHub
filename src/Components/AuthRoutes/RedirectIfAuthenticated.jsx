/* eslint-disable react/prop-types */

import { Navigate } from "react-router-dom";

const RedirectIfAuthenticated = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isLoggedIn") === "true";

  if (isAuthenticated) {
    return <Navigate to="/loggedIn" />;
  }

  return children;
};

export default RedirectIfAuthenticated;
