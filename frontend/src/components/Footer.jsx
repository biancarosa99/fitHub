import React from "react";
import "../styles/Footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-column">
            <h4 className="footer-column-title">LOCATIONS</h4>
            <ul className="footer-column-list">
              <li className="footer-column-list-item">
                <a href="#">
                  {" "}
                  <LocationOnOutlinedIcon sx={{ fontSize: 21 }} />
                  <span>FitHub1</span>
                </a>
              </li>
              <li className="footer-column-list-item">
                <a href="#">
                  {" "}
                  <LocationOnOutlinedIcon sx={{ fontSize: 21 }} />
                  <span>FitHub2</span>
                </a>
              </li>
              <li className="footer-column-list-item">
                <a href="#">
                  {" "}
                  <LocationOnOutlinedIcon sx={{ fontSize: 21 }} />
                  <span>FitHub3</span>
                </a>
              </li>
            </ul>
          </div>

          {/* <div className="footer-column">
            <h4 className="footer-column-title">LOCATIONS</h4>
            <ul className="footer-column-list">
              <li className="footer-column-list-item">
                <a href="#">FitHub1</a>
              </li>
              <li className="footer-column-list-item">
                <a href="#">FitHub2</a>
              </li>
              <li className="footer-column-list-item">
                <a href="#">FitHub3</a>
              </li>
            </ul>
          </div> */}

          <div className="footer-column">
            <h4 className="footer-column-title">CONTACT</h4>
            <ul className="footer-column-list">
              <li className="footer-column-list-item">
                <a href="#">
                  <MailOutlineIcon sx={{ fontSize: "large" }} />
                  <span>contact@fithub.com</span>
                </a>
              </li>
              <li className="footer-column-list-item">
                <a href="#">
                  <PhoneIcon sx={{ fontSize: "large" }} />{" "}
                  <span>0734678122</span>
                </a>
              </li>
              <li className="footer-column-list-item">
                <a href="#">
                  {" "}
                  <PhoneIcon sx={{ fontSize: "large" }} />{" "}
                  <span>0356199199</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">FOLLOW US</h4>
            <ul className="footer-column-list">
              <div className="social-links">
                <a href="#">
                  <FacebookOutlinedIcon />
                </a>
                <a href="#">
                  <InstagramIcon />
                </a>
                <a href="#">
                  <TwitterIcon />
                </a>
                <a href="#">
                  <LinkedInIcon />
                </a>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
