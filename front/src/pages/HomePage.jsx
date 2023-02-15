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
import MyCard from "../components/Card";

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
    z-index: 0;
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
  }
  .grey{
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
`;
const a = [{
  "id": 1,
"firstName": "charaf eddine",
"lastName": "zabakh",
"username": "chzabakh",
"email": "qwe@qwe.com",
"isAccountConfirmed": "1",
"birthday": "2000-01-11",
"city": "Khouribga",
"gender": "M",
"sexualPreferences": "F",
"biography": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed ante dictum, varius leo et, eleifend sem. Nam condimentum diam eget feugiat fer.",
"longitude": -6.9063,
"latitude": 32.8811,
"images": [
{
"id": 1,
"uid": 2,
"isProfileImage": "1",
"image": "1676294078782_cbbb780b692555581799208ac3669638.png",
"created_at": "2023-02-13T12:14:38.000Z",
"updated_at": "2023-02-13T12:14:38.000Z"
},
{
"id": 2,
"uid": 2,
"isProfileImage": "0",
"image": "1676294078898_8a596843aaf9efdb32edef006d115f13.png",
"created_at": "2023-02-13T12:14:38.000Z",
"updated_at": "2023-02-13T12:14:38.000Z"
},
{
"id": 3,
"uid": 2,
"isProfileImage": "0",
"image": "1676294078898_3794aeb818e1d8d0bde12ffcf9d479f2.png",
"created_at": "2023-02-13T12:14:38.000Z",
"updated_at": "2023-02-13T12:14:38.000Z"
},
{
"id": 4,
"uid": 2,
"isProfileImage": "0",
"image": "1676294078900_50941791e1086633f04dc163b80343a8.png",
"created_at": "2023-02-13T12:14:38.000Z",
"updated_at": "2023-02-13T12:14:38.000Z"
},
{
"id": 5,
"uid": 2,
"isProfileImage": "0",
"image": "1676294078900_d30dc4e1449603b04916f0d0ca5c4313.png",
"created_at": "2023-02-13T12:14:38.000Z",
"updated_at": "2023-02-13T12:14:38.000Z"
}
]
}, {
"id": 2,
"firstName": "bou3eza",
"lastName": "zabakh",
"username": "chzabakh",
"email": "qwe@qwe.com",
"isAccountConfirmed": "1",
"birthday": "2004-01-11",
"city": "Khouribga",
"gender": "M",
"sexualPreferences": "F",
"biography": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed ante dictum, varius leo et, eleifend sem. Nam condimentum diam eget feugiat fer.",
"longitude": -6.9063,
"latitude": 32.8811,
"images": [
{
"id": 1,
"uid": 2,
"isProfileImage": "1",
"image": "1676294078782_cbbb780b692555581799208ac3669638.png",
"created_at": "2023-02-13T12:14:38.000Z",
"updated_at": "2023-02-13T12:14:38.000Z"
},
{
"id": 2,
"uid": 2,
"isProfileImage": "0",
"image": "1676294078898_8a596843aaf9efdb32edef006d115f13.png",
"created_at": "2023-02-13T12:14:38.000Z",
"updated_at": "2023-02-13T12:14:38.000Z"
},
{
"id": 3,
"uid": 2,
"isProfileImage": "0",
"image": "1676294078898_3794aeb818e1d8d0bde12ffcf9d479f2.png",
"created_at": "2023-02-13T12:14:38.000Z",
"updated_at": "2023-02-13T12:14:38.000Z"
},
{
"id": 4,
"uid": 2,
"isProfileImage": "0",
"image": "1676294078900_50941791e1086633f04dc163b80343a8.png",
"created_at": "2023-02-13T12:14:38.000Z",
"updated_at": "2023-02-13T12:14:38.000Z"
},
{
"id": 5,
"uid": 2,
"isProfileImage": "0",
"image": "1676294078900_d30dc4e1449603b04916f0d0ca5c4313.png",
"created_at": "2023-02-13T12:14:38.000Z",
"updated_at": "2023-02-13T12:14:38.000Z"
}
]
}, {
"id": 3,
"firstName": "9addour",
"lastName": "zabakh",
"username": "chzabakh",
"email": "qwe@qwe.com",
"isAccountConfirmed": "1",
"birthday": "2003-01-11",
"city": "Khouribga",
"gender": "M",
"sexualPreferences": "F",
"biography": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed ante dictum, varius leo et, eleifend sem. Nam condimentum diam eget feugiat fer.",
"longitude": -6.9063,
"latitude": 32.8811,
"images": [
{
"id": 1,
"uid": 2,
"isProfileImage": "1",
"image": "1676294078782_cbbb780b692555581799208ac3669638.png",
"created_at": "2023-02-13T12:14:38.000Z",
"updated_at": "2023-02-13T12:14:38.000Z"
},
{
"id": 2,
"uid": 2,
"isProfileImage": "0",
"image": "1676294078898_8a596843aaf9efdb32edef006d115f13.png",
"created_at": "2023-02-13T12:14:38.000Z",
"updated_at": "2023-02-13T12:14:38.000Z"
},
{
"id": 3,
"uid": 2,
"isProfileImage": "0",
"image": "1676294078898_3794aeb818e1d8d0bde12ffcf9d479f2.png",
"created_at": "2023-02-13T12:14:38.000Z",
"updated_at": "2023-02-13T12:14:38.000Z"
},
{
"id": 4,
"uid": 2,
"isProfileImage": "0",
"image": "1676294078900_50941791e1086633f04dc163b80343a8.png",
"created_at": "2023-02-13T12:14:38.000Z",
"updated_at": "2023-02-13T12:14:38.000Z"
},
{
"id": 5,
"uid": 2,
"isProfileImage": "0",
"image": "1676294078900_d30dc4e1449603b04916f0d0ca5c4313.png",
"created_at": "2023-02-13T12:14:38.000Z",
"updated_at": "2023-02-13T12:14:38.000Z"
}
]
}];
const Home = (e) => {
  // console.log('second test: ' + e.data);
  // const [openPanel, setOpenPanel] = useState(false);
  // console.log(openPanel);

  const [Profiles, setProfiles] = useState(a);
  
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
          <div className="infos">
          <p className="bigger">Suggested Profiles</p>
            <div className="profiles">
              {
                Profiles.map(obj => (<MyCard user={obj}/>))
              }

            </div>
            <Pagination
              style={{ marginLeft: "auto", marginRight: "auto", marginTop: "50px", width: "40%" }}
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
