import React from "react";
import styled from "styled-components";
import { slide as Menu } from "react-burger-menu";
import "../styles/sidebar.css";
import Slider from "./Slider";
import MenuIcon from "../images/menu2.png"


export default (props) => {
  return (
    <Menu customBurgerIcon={ <img src={MenuIcon} /> }>
      <div>
        <p style={{ marginBottom: "40px" }}>Age Gap</p>
        <Slider minAge={18} maxAge={99} />
      </div>
      <div>
        <p style={{ marginBottom: "40px" }}>Fame Rating Gap</p>
        <Slider minRating={0} maxRating={100} />
      </div>
      <div style={{ marginBottom: "30px" }}>
        <p style={{ marginBottom: "10px" }}>Location</p>
        <input style={{ color: "black" }}></input>
      </div>
      <div>
        <p style={{ marginBottom: "10px" }}>Tags</p>
        <input style={{ color: "black" }}></input>
      </div>
    </Menu>
  );
};
