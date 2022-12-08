import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export default function PublicRoute({ token }) {
  return token === "" ? <Outlet /> : <Navigate to="/profile" />;
}
