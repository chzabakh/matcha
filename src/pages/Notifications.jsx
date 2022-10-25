import React from "react";
import styled from "styled-components";
import "../styles/index.scss";
import NavbarLogged from "../components/NavbarLogged";
import Footbar from "../components/Footbar";

const Notif = styled.div``;

const Notifications = () => {
  return (
    <Notif>
        <div className="main-container">

      <NavbarLogged />
      <main className=" main-main">

      </main>
      <Footbar />
        </div>
    </Notif>
  );
};

export default Notifications;
