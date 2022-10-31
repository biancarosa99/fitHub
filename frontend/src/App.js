import React from "react";
import { useMediaQuery } from "react-responsive";
import HomeInfoContainer from "./components/HomeInfoContainer";
// import HomeInfoMobileContainer from "./components/HomeInfoMobileContainer";
import Navbar from "./components/Navbar";

function App() {
  const isDesktop = useMediaQuery({ query: "(min-width: 451px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 450px)" });
  return (
    <React.Fragment>
      <div style={{display:"flex", flexDirection:"column"}}>  
        <Navbar />
        <div>
          <HomeInfoContainer />
        </div>
        
      </div>
    </React.Fragment>
  );
}

export default App;
