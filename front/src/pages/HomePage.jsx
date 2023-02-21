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
  
  .content {
    position: relative;
    height: 100%;
    margin-top: 10rem;
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
    justify-content: center;
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
      <Sidebar
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
          />
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
            <Pagination
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginTop: "50px",
                  width: "40%",
                }}
                count={10}
                variant="outlined"
                shape="rounded"
              />
          </div>
        </div>
      </main>
    </HomePage>
  );
};
export default Home;
