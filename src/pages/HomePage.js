// src/pages/HomePage.js
import React from 'react';
import Advertisement from '../components/Advertisement';
import ProductSection from '../components/ProductSection';

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