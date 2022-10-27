import React from "react";
import Paper from "@mui/material/Card";
import TestView from "./views/TestView";
import LandingView from "./views/LandingView";
import "./css/app.css";

import BasicCard from "./Components/BasicCard";

function App() {
  return (
    <div>
      <LandingView />
      <TestView />
    </div>
  );
}

export default App;
