import React from "react";
import "../styles/HomeInfoContainer.css";
import LogoIMG from "../assets/women-fitness.jpg";

const HomeInfoContainer = () => {
  return (
    <div className="info-container">
      <div className="wrapper">
        <div className="image-container">
          <img className="fitness-img" src={LogoIMG} />
        </div>
        <div className="text-container">
          <div></div>
          <div className="title">SHAPE YOURSELF</div>
          <div className="description">
            Our club encourages wellness by providing first-class instructors,
            innovative classes, and qualified staff.
          </div>
          <button className="button">JOIN NOW</button>
        </div>
      </div>
    </div>
  );
};

export default HomeInfoContainer;
