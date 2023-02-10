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
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "../components/Sidebar";
import Pagination from "@mui/material/Pagination";

const Main = styled.div`
  .infos {
    text-align: center;
    font-family: verdana;
    font-style: italic;
    font-weight: bolder;
    background-color: #ffffffdc;
    width: 90%;
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
    top: 96px;
    padding-top: 20px;
    padding-bottom: 20px;
    z-index: 0;
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
  .sortAndFilter {
    display: flex;
  }
  .grey{
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));

  }
`;

const Home = (e) => {
  // console.log('second test: ' + e.data);
  const [openPanel, setOpenPanel] = useState(false);
  console.log(openPanel);
  return (
    <Main className="main-container">
      <NavbarLogged />
      <main className="main-main">

      <div className="sort">
        <Sidebar
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
          />
        <div className="sortAndFilter">
          {/* <button>serch</button>
          <select>
          <option>hi</option>
          <option>dsa</option>
          <option>sda</option>
          <option>asd</option>
        </select> */}
        </div>
        <div className="main-main">
          <div className="infos" style={{ marginTop: "50px" }}>
            <Pagination
              style={{ marginLeft: "auto", marginRight: "auto", width: "40%" }}
              count={10}
              variant="outlined"
              shape="rounded"
              />
          </div>
        </div>
      </div>
              </main>
    </Main>
  );
};
export default Home;
