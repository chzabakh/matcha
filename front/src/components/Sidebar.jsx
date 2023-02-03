import React from 'react';
import styled from "styled-components";
import { slide as Menu } from 'react-burger-menu';
import '../styles/sidebar.css';
import Slider from './Slider'

export default props => {
  return (
    <Menu>
      <div className="menu-item">
        Age Gap
        <Slider />
      </div>
      <div className="menu-item">
        Fame Rating Gap
        <Slider />
      </div>
      <div className="menu-item">
        Location
        <input style={{color: 'black'}}></input>
      </div>
      <a className="menu-item">
        Tags
        <input style={{color: 'black'}}></input>
      </a>
    </Menu>
  );
};