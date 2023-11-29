import React from "react";
import { Router } from "./Router/Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/pharmaconnect">
      <Router/>      
    </BrowserRouter>
  );
}

export default App;
