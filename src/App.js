// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Advertisement from './Advertisement'; 
import ProductSection from './ProductSection';
import SearchPage from './SearchPage'; // Import the new component

function App() {
  return (
    <Router>
      <div className="App">
        <Advertisement />
        <ProductSection />
        <ProductSection />
        <ProductSection />

        {/* Add a Link or NavLink to navigate to the SearchPage */}
        {/* <Link to="/search">Go to Search Page</Link> */}
        {/* Define routes */}
        <Routes>
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
