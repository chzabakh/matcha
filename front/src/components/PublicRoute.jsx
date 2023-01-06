import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useState, createContext, useContext } from "react";
import { UserContext } from "../App";
import Home from "../pages/HomePage";

export default function PublicRoute({ token }) {
  // const { token, setToken, completedProfile, setCompletedProfile } = useContext(UserContext);
  console.log("inside pblc, token0 is " + token);

  return token === null ? <Outlet /> : <Home />;
}
