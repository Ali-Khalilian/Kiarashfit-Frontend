import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { jwtDecode } from "jwt-decode";

const RequiredAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();

  const accessToken = auth?.accessToken;

  const location = useLocation();
  return auth?.accessToken && jwtDecode(accessToken).role &&  allowedRoles.includes(jwtDecode(accessToken).role)? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequiredAuth;
