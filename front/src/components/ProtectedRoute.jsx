import React, { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import CompleteProfile from "../pages/CompleteProfile";
import axios from "axios";

export default function ProtecedRoute({ token, completedProfile }) {
  console.log("ikhan " + token);
  console.log("inside prtctc");
  const [userData, setUserData] = useState({});
  const history = useNavigate();
  console.log("data");

  const fetchUsers = async () => {
    const { data } = await axios.get("http://localhost:3001/get_me", {
      headers: {
        Authorization: token,
      },
    });
    setUserData(data);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  console.log(userData);
  if (token !== null) {
    {
      console.log("nga " + completedProfile);
    }
    if (userData) {
      console.log("good");
    } else {
      console.log("bad");
    }
    if (completedProfile === null) {
      //reverse this later
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
