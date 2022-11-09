import React from "react";
import styled from "styled-components";
import "../styles/index.scss";
import NavbarLogged from "../components/NavbarLogged";
import Footbar from "../components/Footbar";
import Viewed, {Liked, LikedBack, Unliked} from "../components/Notif";

const Notif = styled.div`
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

const Notifications = () => {
  return (
    <Notif>
      <div className="main-container">
        <NavbarLogged />
        <main className=" main-main rel">
          <div className="infos">
            <p className="bigger">Notifications</p>
            <Liked />
            <LikedBack />
            <Viewed />
            <Unliked />
          </div>
        </main>
        <Footbar />
      </div>
    </Notif>
  );
};

export default Notifications;
