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
  display: flex;
  min-height: 100%;
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
  .content {
    position: relative;
    height: 100%;
    margin-top: 12rem;
  }
  .infos {
    text-align: center;
    font-family: verdana;
    font-style: italic;
    font-weight: bolder;
    background-color: #ffffffdc;
    width: 90%;
    /* position: absolute; */
    /* top: 100px; */
    padding-top: 50px;
    padding-bottom: 100px;
    margin-left: auto;
    margin-right: auto;
    height: 100%;
  }
  .bigger {
    font-size: larger;
    font-style: italic;
    /* margin-bottom: 50px; */
  }
  .profiles {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 50px;
    height: 100%;
  }
`;

const Home = (e) => {
  const [Profiles, setProfiles] = useState(FakeData);

  return (
    <HomePage>
      <NavbarLogged />
      <main className="mc debfug">
        <div className="grey">
          <div className="infos content">
            <p className="bigger">Suggested Profiles</p>
            <div className="profiles">
              {Profiles.map((obj, idx) => (
                <MyCard user={obj} key={idx} />
              ))}
              {Profiles.map((obj, idx) => (
                <MyCard user={obj} key={idx} />
              ))}
              {Profiles.map((obj, idx) => (
                <MyCard user={obj} key={idx} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </HomePage>
  );
};
export default Home;
