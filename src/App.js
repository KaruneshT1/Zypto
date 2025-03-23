// src/App.js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesConfig from "./routes/RoutesConfig"; // Import the new routes config

function App() {
  return (
    <Router>
      <RoutesConfig />
    </Router>
  );
}

export default App;
