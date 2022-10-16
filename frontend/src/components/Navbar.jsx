import React from "react";
import "../styles/Navbar.css";
import LogoIMG from '../assets/fithublogo2.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brand-logo">
        <a href="/">
          <img className="logo" alt="logo" src={LogoIMG} />
        </a>
      </div>
      <div className="menu-items">
        <ul>
          <li className="menu-item">HOME</li>
          <li className="menu-item">PLANS</li>
          <li className="menu-item">LOGIN</li>
          <li className="menu-item">REGISTER</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
