import React from "react";

import Navbar from "../navbar/Navbar.jsx";
import images from '../../image.js'
import './Header.css'


const Header = () => {
  return (
    <div className="header__container">
      {/* <Navbar /> */}
      <div className="header__container-content">
        <h1 className="header__title">Organize Your Tasks<br/>with <span>Efficiently</span> and <span>Simplicity</span></h1>
        <img src={images.header} alt="header image"/>
      </div>
      
      
    </div>
  );
};

export default Header;
