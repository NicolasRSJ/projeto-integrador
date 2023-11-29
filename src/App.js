import React from "react";
import { Router } from "./Router/Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/pharmaconection">
      <Router/>      
    </BrowserRouter>
  );
}

export default App;
