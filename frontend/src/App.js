import React from "react";
import { useMediaQuery } from "react-responsive";
import HomeInfoContainer from "./components/HomeInfoContainer";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";

function App() {
  const isDesktop = useMediaQuery({ query: "(min-width: 451px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 450px)" });
  return (
    <React.Fragment>
      <Navbar />
      <HomeInfoContainer />
      <Register />
      {/* <Login /> */}
    </React.Fragment>
  );
}

export default App;
