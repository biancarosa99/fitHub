import React, { useState } from "react";
import FitnessClassesCarousel from "./components/FitnessClassesCarousel";
import HomeInfoContainer from "./components/HomeInfoContainer";
import Navbar from "./components/Navbar";
import axios from "axios";
import { useEffect } from "react";
import { AuthProvider } from "./context/AuthContext";

axios.defaults.baseURL = "http://localhost:3000";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <HomeInfoContainer />
      <FitnessClassesCarousel />
    </AuthProvider>
  );
}

export default App;
