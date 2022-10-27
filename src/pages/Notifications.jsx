import React from "react";
import styled from "styled-components";
import "../styles/index.scss";
import NavbarLogged from "../components/NavbarLogged";
import Footbar from "../components/Footbar";

const Notif = styled.div`
  .infos {
    text-align: center;
    font-family: verdana;
    font-style: italic;
    font-weight: bolder;
    background-color: #ffffffdc;
    width: 100%;
    margin-top: -70%;
  }
`;

const Notifications = () => {
  return (
    <Notif>
      <div className="main-container">
        <NavbarLogged />
        <main className=" main-main">
          <div className="infos">
            <p>Notifications</p>
          </div>
        </main>
        <Footbar />
      </div>
    </Notif>
  );
};

export default Notifications;
