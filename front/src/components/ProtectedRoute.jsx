import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import CompleteProfile from "../pages/CompleteProfile";

export default function ProtecedRoute({ token, completedProfile }) {
  console.log("ikhan " + token);
  console.log("inside prtctc");
  const history = useNavigate();

  if (token !== null) {
    {
      console.log("nga " + completedProfile);
    }
    if (completedProfile === null) { //reverse this later
      return <Outlet />;
    } else {
      return <CompleteProfile />;
    }
  } else if (token === null) {
    return <LandingPage />;
    // return <Navigate to="/" />;
  }
  // return <Outlet />
  // return token !== null ? <Outlet /> : <Navigate to="/" />;
}
