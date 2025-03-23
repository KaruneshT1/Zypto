// src/pages/HomePage.js
import React from 'react';
import Advertisement from '../Advertisement';
import ProductSection from '../ProductSection';

function HomePage() {
  return (
    <div>
      <Advertisement />
      <ProductSection />
      <ProductSection />
      <ProductSection />
    </div>
  );
}

export default HomePage;