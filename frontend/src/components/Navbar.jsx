import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brand-logo">LOGO</div>
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
