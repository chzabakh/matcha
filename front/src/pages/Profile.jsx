import React, { useEffect, useState } from "react";
import bgImage from "../images/background.webp";
import styled from "styled-components";
import Navbar from "../components/Navbar.jsx";
import Footbar from "../components/Footbar";
import "../styles/index.scss";
import { Link, useParams } from "react-router-dom";
import NavbarLogged from "../components/NavbarLogged";
import axios from "axios";

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
  .rel {
    position: relative;
  }
  .bigger {
    font-size: larger;
    font-style: italic;
    /* text-decoration: underline; */
    margin-bottom: 50px;
  }
  .twoFlex {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    column-gap: 50px;
    /* column-gap: 100px; */
  }
  .profilePicture {
    /* width: 40%; */
    flex-grow: 1;
  }
  .userInfos {
    /* width: 20%; */
    flex-grow: 2;
    margin-right: 20px;
  }

  .images {
    border: 1px solid rgba(129, 129, 129, 0.6);
    height: 300px;
    width: 260px;
    margin: auto;
    margin-bottom: 30px;
    /* margin-left: 20px; */
    /* position: relative; */
    /* margin-top: 50px;
    margin-left: 100px;
    padding-top: 1px; */
  }

  
  .imagescontainer {
    border: 1px solid rgba(129, 129, 129, 0.6);
    height: 400px;
    width: 360px;
    margin-left: 20px;
  }
  @media (max-width: 700px){
    .images {
      border: 1px solid rgba(129, 129, 129, 0.6);
    height: 225px;
    width: 195px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
    }
    .imagescontainer {
    border: 1px solid rgba(129, 129, 129, 0.6);
    height: 300px;
    width: 360px;
    margin-left: 20px;
  }
  }
  .elements {
    margin-left: 50px;
    margin-top: 20px;
    text-align: left;
    font-size: 14px;
    font-family: sans-serif;


  }
  .elementsfix {
    /* margin-left: -400px !important; */
    margin-top: -26px;
  }
  .jumia {
    display: inline;
    font-family: sans-serif;
  }
  .bio {
    margin-top: 80px;
    margin-bottom: 80px;
  }
  .name {
    margin-top: 30px;
  }
`;

const Profile = () => {
  const [userData, setUserData] = useState({});
  const fetchUsers = async (id) => {
    if (id === "me") {
      const { data } = await axios.get("http://localhost:3001/get_me", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      setUserData(data);
    } else if (id !== "me") {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );
    }
  };

  let { id } = useParams();

  useEffect(() => {
    fetchUsers(id);
  }, []);
  console.log("userData", userData);
  return (
    <Main className=" main-container">
      <NavbarLogged />
      <main className=" main-main rel">
        <div className="infos">
          <p className="bigger">{userData.username}</p>
          <div className="twoFlex">
            {/* {userData.images?.map(({ image }, idx) => (
              <div className="profilePicture" key={idx}>
              <img
              src={`http://localhost:3001/images/${image}`}
              alt="profile picture"
              width="300"
              height="300"
              />
              </div>
            ))} */}
            <div className="imagescontainer">
              <img src={`http://localhost:3001/images/1673784871931_cbbb780b692555581799208ac3669638.png`} alt="avatar0" className="images" />
              <p className="jumia name">{userData.firstName} </p>
              <p className="jumia name">{userData.lastName}</p>
            </div>
            <div className="userInfos">
              <p className="bio">
              ❝ {userData.biography} ❞
              </p>
              <p className="elements">Gender: </p>
              {userData.gender === 'M' ? <p className="elementsfix">male</p> : <p>female</p>}
              <p className="elements">Birthdate: </p>
              <p className="elementsfix">{userData.birthday}</p>
             
            </div>
          </div>
        </div>
      </main>
      <Footbar />
    </Main>
  );
};
export default Profile;
