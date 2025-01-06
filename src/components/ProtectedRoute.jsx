import React from "react";
import { Navigate } from "react-router";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);


  return isAuthenticated ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
