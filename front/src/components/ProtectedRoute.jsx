import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export default function ProtecedRoute({token, completedProfile}) {
  console.log("ikhan "+ token);
  console.log("protectedRoute");
  if (token !== null)
  {
    if (completedProfile !== null)
    {
      return <Outlet />; 
    }
    else
    {
      return <Navigate to="/complete-profile" />;
    }
  }
  else if (token === null)
  {
    return <Navigate to="/" />;
  }
  // return <Outlet />
  // return token !== null ? <Outlet /> : <Navigate to="/" />;
}
