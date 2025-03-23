// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; // HomePage for the index page
import SearchPage from './pages/SearchPage'; // SearchPage for /search

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Home Page */}
        <Route path="/search" element={<SearchPage />} /> {/* Search Page */}
      </Routes>
    </Router>
  );
}

export default App;
