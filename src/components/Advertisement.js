import React from 'react';
import adImage from '../assets/image/ad/dummy_adv1.jpg'; // import Advertisement Image

function Advertisement() {
  return (
    <div className="advertisement">
      <img src={adImage} alt="Advertisement Banner" className="img-fluid w-100" />
    </div>
  );
}

export default Advertisement;