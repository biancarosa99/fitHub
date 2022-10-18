import React from "react";
import "../styles/Navbar.css";
import LogoIMG from "../assets/fithublogo2.png";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useState } from "react";

const Navbar = () => {
  const [modalMenuIsOpen, setModalMenuIsOpen] = useState(false);

  const openModalHandler = () => {
    setModalMenuIsOpen(true);
  };

  const closeModalHandler = () => {
    setModalMenuIsOpen(false);
  };
  return (
    <nav className="navbar">
      <div className="brand-logo">
        <a href="/">
          <img className="logo" alt="logo" src={LogoIMG} />
        </a>
      </div>

      <div className="menu-items-desktop">
        <li className="menu-item">HOME</li>
        <li className="menu-item">PLANS</li>
        <li className="menu-item">LOGIN</li>
        <li className="menu-item">REGISTER</li>
      </div>

      {!modalMenuIsOpen && (
        <li onClick={openModalHandler} className="menu-button">
          <MenuRoundedIcon />
        </li>
      )}

      {modalMenuIsOpen && (
        <li onClick={closeModalHandler} className="menu-button">
          <CloseRoundedIcon />
        </li>
      )}
      {modalMenuIsOpen && (
        <div className="menu-items-mobile">
          <li className="menu-item">HOME</li>
          <li className="menu-item">PLANS</li>
          <li className="menu-item">LOGIN</li>
          <li className="menu-item">REGISTER</li>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
