import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export default function ProtecedRoute({token}) {
  return token !== "" ? <Outlet /> : <Navigate to="/infos" />;
}
