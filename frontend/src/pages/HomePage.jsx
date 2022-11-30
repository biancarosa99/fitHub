import React from "react";
import FitnessClassesCarousel from "../components/FitnessClassesCarousel";
import HomeInfoContainer from "../components/HomeInfoContainer";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <HomeInfoContainer />
      <FitnessClassesCarousel />
    </React.Fragment>
  );
};

export default HomePage;
