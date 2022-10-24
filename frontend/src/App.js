import React from "react";
import { useMediaQuery } from "react-responsive";
import HomeInfoContainer from "./components/HomeInfoContainer";
import HomeInfoMobileContainer from "./components/HomeInfoMobileContainer";
import Navbar from "./components/Navbar";

function App() {
  const isDesktop = useMediaQuery({ query: "(min-width: 451px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 450px)" });
  return (
    <React.Fragment>
      <Navbar />
      {isDesktop && <HomeInfoContainer />}
      {isMobile && <HomeInfoMobileContainer />}
      {/* <HomeInfoContainer /> */}
    </React.Fragment>
  );
}

export default App;
