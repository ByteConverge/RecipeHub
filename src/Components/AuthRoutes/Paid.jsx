/* eslint-disable react/prop-types */
// src/components/ProtectedRoute.js

import { Navigate } from "react-router-dom";

const Paid = ({ children }) => {
  const token = localStorage.getItem("token");
  const premium = localStorage.getItem("premium")

  if (!token && premium !== 'paid'  ) {
    return <Navigate to="/payment" replace />;
  }

  return children;
};

export default Paid;
