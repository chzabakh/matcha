import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export default function PublicRoute({ token }) {
  console.log(token);
  return token === null ? <Outlet /> : <Navigate to="/profile" />;
}
