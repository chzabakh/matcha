import React from 'react';
import styled from "styled-components";
import { slide as Menu } from 'react-burger-menu';
import '../styles/sidebar.css';
import Slider from './Slider'

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Age Gap
        <Slider></Slider>
      </a>
      <a className="menu-item" href="/salads">
        Salads
      </a>
      <a className="menu-item" href="/pizzas">
        Pizzas
      </a>
      <a className="menu-item" href="/desserts">
        Desserts
      </a>
    </Menu>
  );
};