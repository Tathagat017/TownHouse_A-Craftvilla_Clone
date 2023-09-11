import "./App.css";
import { AllRoutes } from "./Routes/AllRoutes";
import React, { useEffect } from "react";
import websiteLogo from "./Assets/Website-Logo/testLogo7.jpg";
function App() {
  useEffect(() => {
    const fevicon = document.getElementById("favicon");
    const title = document.getElementsByTagName("title");
    title[0].innerText = "TownHall-Marketplace";
    fevicon.href = websiteLogo;
  }, []);
  return (
    <div className="App">
      <AllRoutes />
    </div>
  );
}

export default App;
