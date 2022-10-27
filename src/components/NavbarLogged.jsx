import "../styles/index.scss";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal.jsx";
import { useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatIcon from "@mui/icons-material/Chat";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";

const Nav = styled.div`
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
    margin-right: 50px;
    cursor: pointer;
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

  div.usertools * {
    /* margin-left: 10px; */
    margin-top: 8px;
    margin-bottom: 8px;
  }

  .logotoolsgrid {
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  .fixgear {
    margin-right: 20px;
    margin-top: 10px !important;
    margin-bottom: 0px !important;
  }

  .hvbtn {
    margin: 10px;
    padding-left: 5px;
    padding-right: 5px;
  }

  .hvbtn:hover {
    background-color: #ffffff55;
    border-radius: 10px;
  }
`;

const NavbarLogged = () => {
  const [counter, setCounter] = useState(0);
  const renderModal = () => {
    setCounter(1);
  };
  return (
    <Nav>
      <header className="main-header">
        <div className="logotoolsgrid">
          <h1 className="logo">
            <Link to="/">Matcha</Link>
          </h1>
          <div className="usertools">
            <Link to="/notifications">
              <button className="hvbtn">
                <NotificationsIcon
                  sx={{ fontSize: 30 }}
                  style={{ color: "white" }}
                />
              </button>
            </Link>
            <Link to="/messages">
              <button className="hvbtn">
                <ChatIcon sx={{ fontSize: 30 }} style={{ color: "white" }} />
              </button>
            </Link>
            <Link to="/profile">
              <button className="hvbtn">
                <PersonIcon sx={{ fontSize: 30 }} style={{ color: "white" }} />
              </button>
            </Link>
          </div>
        </div>

        <div className="logotoolsgrid">
          <Link to="/settings">
            <button className="fixgear hvbtn">
              <SettingsIcon sx={{ fontSize: 30 }} style={{ color: "white" }} />
            </button>
          </Link>
          <Link to="/">
            <h2
              className="login"
              // onClick={}
            >
              Log out
            </h2>
          </Link>
          {/* {counter ? (<LoginModal/>) : (<div></div>) } */}
          {/* <LoginModal className="login"/> */}
        </div>
      </header>
    </Nav>
  );
};

export default NavbarLogged;
