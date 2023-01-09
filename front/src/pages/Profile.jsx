import React, { useEffect } from "react";
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
    width: 100%;
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
`;

const Profile = () => {
  const fetchUsers = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    // console.log(data);
  };

  fetchUsers();

  let { id } = useParams();
  console.log(id);
  return (
    <Main className=" main-container">
      <NavbarLogged />
      <main className=" main-main rel">
        <div className="infos">
          <p className="bigger">PROFILE</p>
          <div className="twoFlex">
            <div className="profilePicture">
              <img
                src="https://pbs.twimg.com/profile_images/1229161450536611848/gS5WbBcp_400x400.jpg"
                alt="profile picture"
                width="300"
                height="300"
              />
            </div>
            <div className="userInfos">
              hello, my name is {"Adolf"}, im looking for a beautiful girl, i am
              a peinter
            </div>
          </div>
        </div>
      </main>
      <Footbar />
    </Main>
  );
};
export default Profile;
