import React from "react";
import FitnessClassesCarousel from "./components/FitnessClassesCarousel";
import HomeInfoContainer from "./components/HomeInfoContainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <HomeInfoContainer />
      <FitnessClassesCarousel />
    </React.Fragment>
  );
}

export default App;
