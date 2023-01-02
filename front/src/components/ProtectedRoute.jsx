import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export default function ProtecedRoute({token}) {
  console.log("ikhan "+ token);
  return <Outlet />
  // return token !== null ? <Outlet /> : <Navigate to="/" />;
}
