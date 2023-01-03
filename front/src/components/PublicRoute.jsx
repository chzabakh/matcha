import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useState, createContext, useContext } from "react";
import { UserContext } from "../App";

export default function PublicRoute({ token0 }) {
  const { token, setToken, completedProfile, setCompletedProfile } = useContext(UserContext);
  
  return token0 === null ? <Outlet /> : <Navigate to="/home" />;
}
