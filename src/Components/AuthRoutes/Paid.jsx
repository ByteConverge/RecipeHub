/* eslint-disable react/prop-types */
// src/components/ProtectedRoute.js

import { Navigate } from "react-router-dom";

const Paid = ({ children }) => {
  const token = localStorage.getItem("token");
  const premium = localStorage.getItem("premium")

  if (!token && !premium  ) {
    return <Navigate to="/loggedIn" replace />;
  }

  return children;
};

export default Paid;
