import React from "react";
import "../styles/Navbar.css";
import LogoIMG from "../assets/fithublogo2.png";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const Navbar = () => {
  const [modalMenuIsOpen, setModalMenuIsOpen] = useState(false);
  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
  const [registerModalIsOpen, setRegisterModalIsOpen] = useState(false);

  const openModalHandler = () => {
    setModalMenuIsOpen(true);
  };

  const closeModalHandler = () => {
    setModalMenuIsOpen(false);
  };

  const openLoginModalHandler = () => {
    setLoginModalIsOpen(true);
    modalMenuIsOpen && setModalMenuIsOpen(false);
  };

  const closeLoginModalHandler = () => {
    setLoginModalIsOpen(false);
  };

  const openRegisterModalHandler = () => {
    setRegisterModalIsOpen(true);
    modalMenuIsOpen && setModalMenuIsOpen(false);
  };

  const closeRegisterModalHandler = () => {
    setRegisterModalIsOpen(false);
  };

  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="brand-logo">
          <a href="/">
            <img className="logo" alt="logo" src={LogoIMG} />
          </a>
        </div>

        <div className="menu-items-desktop">
          <li className="menu-item">HOME</li>
          <li className="menu-item">PLANS</li>
          <li className="menu-item" onClick={openLoginModalHandler}>
            LOGIN
          </li>
          <li className="menu-item" onClick={openRegisterModalHandler}>
            REGISTER
          </li>
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
            <li className="menu-item" onClick={openLoginModalHandler}>
              LOGIN
            </li>
            <li className="menu-item" onClick={openRegisterModalHandler}>
              REGISTER
            </li>
          </div>
        )}
      </nav>
      {loginModalIsOpen && <Login closeLogin={closeLoginModalHandler} />}
      {registerModalIsOpen && (
        <Register closeRegister={closeRegisterModalHandler} />
      )}
    </React.Fragment>
  );
};

export default Navbar;
