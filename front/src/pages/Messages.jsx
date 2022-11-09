import React from "react";
import bgImage from "../images/background.webp";
import styled from "styled-components";
import Navbar from "../components/Navbar.jsx";
import Footbar from "../components/Footbar";
import "../styles/index.scss";
import { Link } from "react-router-dom";
import NavbarLogged from "../components/NavbarLogged";

const Mess = styled.div`


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
`;

const Messages = () => {
  return (
    <Mess>
      <div className="main-container">
        <NavbarLogged />
        <main className=" main-main rel">
          <div className="infos">
            <p className="bigger">Messages</p>
            
          </div>
        </main>
        <Footbar />
      </div>
    </Mess>
  );
};
export default Messages;
