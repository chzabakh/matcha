import "../styles/index.scss";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal.jsx";
import { useState } from "react";


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
`;

const Navbar = () => {
  const [counter, setCounter] = useState(0);
  const renderModal = () => {
    setCounter(1);
  }
  return (
    <Nav>
      <header className="main-header">
        <h1 className="logo">
          <Link to="/">Matcha</Link>
        </h1>
        {/* <h2 className="login"
        onClick={renderModal}
        >Log in
        </h2> */}
        {/* {counter ? (<LoginModal/>) : (<div></div>) } */}
        <LoginModal className="login"/>
      </header>
    </Nav>
  );
};

export default Navbar;
