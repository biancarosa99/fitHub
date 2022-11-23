import React from "react";
import "../styles/HomeInfoMobileContainer.css";
import LogoIMG from "../assets/women-fitness.jpg";

const HomeInfoMobileContainer = () => {
  return (
    <div className="info-mobile-container">
      <div className="wrapper">
        <div className="text-container">
          <div className="title">SHAPE YOURSELF</div>
          <div className="description">
            Our club encourages wellness by providing first-class instructors,
            innovative classes, and qualified staff.
          </div>
        </div>
        <div className="image-container">
          <img className="fitness-img" src={LogoIMG} />
          {/* <button className="button">JOIN NOW</button> */}
        </div>
      </div>
    </div>
  );
};

export default HomeInfoMobileContainer;
