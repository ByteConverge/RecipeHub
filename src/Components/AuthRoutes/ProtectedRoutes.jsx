/* eslint-disable react/prop-types */
// src/components/ProtectedRoute.js

import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    
    return <Navigate to="/signIn" replace />;
  }

  
  return children;
};

export default ProtectedRoute;
