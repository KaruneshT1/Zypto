import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/css/styles.css"; // Import global CSS

const mainContainer = document.getElementById("root");

if (mainContainer) {
  ReactDOM.createRoot(mainContainer).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}