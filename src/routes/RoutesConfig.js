// src/routes/RoutesConfig.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage"; // Import HomePage
import SearchPage from "../pages/SearchPage"; // Import SearchPage

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );
};

export default RoutesConfig;
