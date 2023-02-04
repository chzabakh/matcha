import React from 'react';
import styled from "styled-components";
import { slide as Menu } from 'react-burger-menu';
import '../styles/sidebar.css';
import Slider from './Slider'

export default props => {
  return (
    <Menu>
      <div className="menu-item">
        <p style={{marginBottom: '40px'}}>Age Gap</p>
        <Slider minAge={18} maxAge={99} />
      </div>
      <div className="menu-item">
        <p style={{marginBottom: '40px'}}>Fame Rating Gap</p>
        <Slider minRating={0} maxRating={100} />
      </div>
      <div style={{marginBottom: '30px'}} className="menu-item">
        <p style={{marginBottom: '10px'}}>Location</p>
        <input style={{color: 'black'}}></input>
      </div>
      <div className="menu-item">
        <p style={{marginBottom: '10px'}}>Tags</p>
        <input style={{color: 'black'}}></input>
      </div>
    </Menu>
  );
};