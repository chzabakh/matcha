import React, { useState, useEffect, useRef } from "react";
import bgImage from "../images/background.webp";
import styled from "styled-components";
import Footbar from "../components/Footbar";
import "../styles/index.scss";
import { Link } from "react-router-dom";
import NavbarLogged from "../components/NavbarLogged";
import axios from "axios";
import SlidingPanel from "react-sliding-side-panel";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "../components/Sidebar";
import Pagination from "@mui/material/Pagination";
import MyCard from "../components/Card";
import { FakeData } from "../fakeData/fakeData";

const HomePage = styled.div`
  /* .infos {
    text-align: center;
    font-family: verdana;
    font-style: italic;
    font-weight: bolder;
    background-color: #ffffffdc;
    width: 90%;
    position: absolute;
    top: 100px;
    padding-top: 50px;
    padding-bottom: 100px;

  }
  
  .sort {
    text-align: center;
    font-family: verdana;
    font-style: italic;
    font-weight: bolder;
    background-color: #ffffffdc;
    width: 100%;
    position: absolute;
    top: 96px;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .rel {
    position: relative;
  }

  .twoFlex {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }

  .profilePicture {
    width: 40%;
  }

  .userInfos {
    width: 20%;
  }
  .sortAndFilter {
    display: flex;
    position: fixed;
  }

  .grey {
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
  }

  .profiles {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    min-height: 800px;
    padding: 50px;
  }

  .bigger {
    font-size: larger;
    font-style: italic;
  }

  .main-main-fix {
  height: 180vh;
}

.mc2 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
} */
`;

const Home = (e) => {
  const [Profiles, setProfiles] = useState(FakeData);

  return (
    <HomePage className="mc">
        <NavbarLogged />
        <div className="grey"></div>
    </HomePage>
  );
};
export default Home;
