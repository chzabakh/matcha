import React, { useState, useEffect, useRef } from "react";
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
import MyCard from "../components/Card";
import { FakeData } from "../fakeData/fakeData";

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
    padding-top: 50px;
    padding-bottom: 100px;
    /* min-height: 1000px;
    height: 100%;
    overflow: scroll; */
    /* display: flex; */
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
    /* margin-bottom: 50px; */
  }
  .main-main-fix {
  height: 180vh;
  /* height: fit-content; */
}
`;
const oldHome = (e) => {
  // console.log('second test: ' + e.data);
  // const [openPanel, setOpenPanel] = useState(false);
  // console.log(openPanel);

  const [Profiles, setProfiles] = useState(FakeData);

  // useEffect(()=> {

  //   const getUsers = async () => {

  //       const users = await axios.get("http://localhost:3001/get_feed_users", {
  //           header: {
  //               Authorization: localStorage.getItem("token"),
  //             },
  //           });
  //         }

  //         setProfiles(a);

  //       }, [])

  // console.log('QQQQQ',Profiles)


  // const childRef = useRef(null);
  // useEffect(() => {
  //   const childHeight = childRef.current.offsetHeight;
  //   console.log(childHeight);
  //   const parentElement = childRef.current.closest('.main-main-fix');
  //   parentElement.style.height = `${childHeight + 500}px`;
  // }, [])

  return (
    <Main className="main-container">
      <NavbarLogged />
      <main className="main-main main-main-fix">
        <div className="sort">
          <Sidebar
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
          />
          <div className="main-main">
            <div className="infos"
              // ref={childRef}
            >
              <p className="bigger">Suggested Profiles</p>
              <div className="profiles" 
              >
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
        </div>
      </main>
    </Main>
  );
};
export default oldHome;
