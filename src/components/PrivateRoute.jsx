import React from "react";
import { Navigate } from "react-router";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const { role } = useSelector((state) => state.auth.role);


  return role ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;
