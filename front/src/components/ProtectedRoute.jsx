import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export default function ProtecedRoute({token}) {
  console.log("ikhan "+ token);
  const v = 0;
  if (token !== null)
  {
    if (token){
      
    }
  }
  else if (token)
  {
    v = 0;
  }
  return <Outlet />
  // return token !== null ? <Outlet /> : <Navigate to="/" />;
}
