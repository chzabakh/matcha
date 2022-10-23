import React from "react";
import bgImage from "../images/background.webp";
import styled from "styled-components";
import Navbar from "../components/Navbar.jsx";
import Footbar from "../components/Footbar";
import "../styles/index.scss";
import  {Link} from 'react-router-dom';

const Main = styled.div`
  min-height: 100vh;
  background-repeat: no-repeat;
  /*background-size: cover;*/
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${bgImage});

  .main-header {
    display: flex;
    height: 6rem;
    justify-content: space-between;
    align-items: center;
    background-image: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.4));
  }

  .logo {
    font-family: Lobster, cursive;
    color: white;
    font-size: 40px;
    font-weight: normal;
    margin-left: 20px;
  }

  .login {
    font-family: sans-serif;
    margin-right: 20px;
    background-color: white;
    font-size: 18px;
    padding: 10px 25px;
    border-radius: 30px;
    cursor: pointer;
  }

  .main-main {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
  }

  .SR {
    color: white;
    font-family: prompt;
    font-size: 120px;
    margin: 0;
    text-align: center;
  }

  @media (max-width: 500px) {
    .SR {
      color: white;
      font-family: prompt;
      font-size: 60px;
      margin: 0;
      text-align: center;
    }
  }

  .main-main sup {
    font-weight: 350;
    font-size: 50px;
  }

`;

const Profile = () => {
  return (
    <Main className=" main-container">
      <Navbar />
      <main className=" main-main">
        <p className="SR">
          Swipe Right
          <sup>®</sup>
        </p>
        <Link to="/infos">
        <h2 className="register button">Create account</h2>
        </Link>
      </main>
      <Footbar />
    </Main>
  );
};
export default Profile;
