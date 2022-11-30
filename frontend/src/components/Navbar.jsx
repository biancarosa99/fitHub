import React, { useContext } from "react";
import "../styles/Navbar.css";
import LogoIMG from "../assets/fithublogo2.png";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import { useEffect } from "react";
import AuthContext from "../context/AuthContext";

const Navbar = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
  const [registerModalIsOpen, setRegisterModalIsOpen] = useState(false);
  const { user, setUser } = useContext(AuthContext);

  const openMobileMenuHandler = () => {
    setMobileMenuIsOpen(true);
  };

  const closeMobileMenuHandler = () => {
    setMobileMenuIsOpen(false);
  };

  const openLoginModalHandler = () => {
    setLoginModalIsOpen(true);
    mobileMenuIsOpen && setMobileMenuIsOpen(false);
  };

  const closeLoginModalHandler = () => {
    setLoginModalIsOpen(false);
  };

  const openRegisterModalHandler = () => {
    setRegisterModalIsOpen(true);
    mobileMenuIsOpen && setMobileMenuIsOpen(false);
  };

  const closeRegisterModalHandler = () => {
    setRegisterModalIsOpen(false);
  };

  const logoutHandler = () => {
    setUser(null);
  };

  const userLoggedOutClasses = user ? "menu-item hide-menu-item" : "menu-item";

  const userLoggedInClasses = user ? "menu-item" : "menu-item hide-menu-item";

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
          <li className={userLoggedOutClasses} onClick={openLoginModalHandler}>
            LOGIN
          </li>
          <li
            className={userLoggedOutClasses}
            onClick={openRegisterModalHandler}
          >
            REGISTER
          </li>
          <li className={userLoggedInClasses} onClick={logoutHandler}>
            LOGOUT
          </li>
        </div>

        {!mobileMenuIsOpen ? (
          <li onClick={openMobileMenuHandler} className="mobile-menu-button">
            <MenuRoundedIcon />
          </li>
        ) : (
          <li onClick={closeMobileMenuHandler} className="mobile-menu-button">
            <CloseRoundedIcon />
          </li>
        )}

        {mobileMenuIsOpen && (
          <div className="menu-items-mobile">
            <li className="menu-item">HOME</li>
            <li className="menu-item">PLANS</li>
            <li
              className={userLoggedOutClasses}
              onClick={openLoginModalHandler}
            >
              LOGIN
            </li>
            <li
              className={userLoggedOutClasses}
              onClick={openRegisterModalHandler}
            >
              REGISTER
            </li>
            <li className={userLoggedInClasses} onClick={logoutHandler}>
              LOGOUT
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
