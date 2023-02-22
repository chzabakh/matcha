import React from "react";
import styled from "styled-components";
import { slide as Menu } from "react-burger-menu";
import "../styles/sidebar.css";
import Slider from "./Slider";
import { withStyles } from '@mui/styles';
import MenuIcon from "../images/menu4.png";

const CustomSlider = withStyles({
  root: {
    color: 'yellow',
  },
})(Slider);

const MyMenu = styled(Menu)`
  .title {
    font-size: larger;
    font-style: italic;
    text-align: center;
    font-weight: bold;
    text-decoration: underline;
    margin-bottom: 20px;
    color: rgb(240, 163, 57);
  }
`;

export default (props) => {
  return (
    <MyMenu customBurgerIcon={<img src={MenuIcon} />}>
      <form>
        <p className="title">Search</p>
        <div>
          <p style={{ marginBottom: "40px" }}>Age Gap</p>
          <CustomSlider minAge={18} maxAge={99} />
        </div>
        <div>
          <p style={{ marginBottom: "40px" }}>Fame Rating Gap</p>
          <CustomSlider minRating={0} maxRating={100} />
        </div>
        <div style={{ marginBottom: "30px" }}>
          <p style={{ marginBottom: "10px" }}>Location</p>
          <input style={{ color: "black", backgroundColor:'#FFF1DA' }}></input>
        </div>
        <div>
          <p style={{ marginBottom: "10px" }}>Tags</p>
          <input style={{ color: "black", backgroundColor:'#FFF1DA' }}></input>
        </div>
      </form>
      <form>
        <p className="title" style={{marginTop: '80px'}}>Sort & Filters</p>

      </form>
    </MyMenu>
  );
};
