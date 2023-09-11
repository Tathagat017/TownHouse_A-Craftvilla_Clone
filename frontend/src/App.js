import "./App.css";
import { AllRoutes } from "./Routes/AllRoutes";
import React, { useEffect } from "react";
function App() {
  useEffect(() => {
    const fevicon = document.getElementById("favicon");
    const title = document.getElementsByTagName("title");
    title[0].innerText = "TownHall-Marketplace";
    fevicon.href = "./logo.jpg";
  }, []);
  return (
    <div className="App">
      <AllRoutes />
    </div>
  );
}

export default App;
