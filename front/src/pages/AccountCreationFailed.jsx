import React from "react";
import styled from "styled-components";
import "../styles/index.scss";
import Navbar from "../components/Navbar";
import Footbar from "../components/Footbar";

const Notif = styled.div`
  .infos {
    text-align: center;
    font-family: verdana;
    font-style: italic;
    font-weight: bolder;
    background-color: #ffffffdc;
    width: 100%;
    margin-top: -70px;
  }
  p {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const AccountFailed = () => {
  return (
    <Notif>
      <div className="main-container">
        <Navbar />
        <main className=" main-main">
          <div className="infos">
            <p style={{color:"red"}} >Failed to create Account</p>
          </div>
        </main>
        <Footbar />
      </div>
    </Notif>
  );
};

export default AccountFailed;
