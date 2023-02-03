import React, { useState, useEffect } from "react";
import bgImage from "../images/background.webp";
import styled from "styled-components";
import Navbar from "../components/Navbar.jsx";
import Footbar from "../components/Footbar";
import "../styles/index.scss";
import { Link } from "react-router-dom";
import NavbarLogged from "../components/NavbarLogged";
import axios from "axios";
import SlidingPanel from "react-sliding-side-panel";
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from "../components/Sidebar";

const Main = styled.div`
  .infos {
    text-align: center;
    font-family: verdana;
    font-style: italic;
    font-weight: bolder;
    background-color: #ffffffdc;
    width: 100%;
    position: absolute;
    top: 100px;
    padding-top: 100px;
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
    top: 100px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .rel {
    position: relative;
  }
  .bigger {
    font-size: larger;
    font-style: italic;
    text-decoration: underline;
    margin-bottom: 50px;
  }
  .twoFlex {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    /* column-gap: 100px; */
  }
  .profilePicture {
    width: 40%;
  }
  .userInfos {
    width: 20%;
  }
  .sidebarq {
    position: static;
    cursor: pointer;
    z-index: 20;
  }
  .mlawi {
    z-index: 10000;
    position: absolute;
  }
`;

const Home = (e) => {
  // console.log('second test: ' + e.data);
  const [openPanel, setOpenPanel] = useState(false);
  console.log(openPanel);
  return (
    <Main className="main-container">
      <NavbarLogged />
          <div className="sort debug"></div>
          <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
          
     </Main>
  );
};
export default Home;
