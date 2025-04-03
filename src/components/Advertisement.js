import React, { useEffect } from 'react';
import adImage from '../assets/image/ad/dummy_adv1.jpg'; // import Advertisement Image

function Advertisement() {
  useEffect(() => {
    // Add padding to the body when the component is mounted
    document.body.style.paddingTop = '80px';

    // Cleanup function to remove the padding when the component is unmounted
    return () => {
      document.body.style.paddingTop = '';
    };
  }, []);

  return (
    <div className="advertisement">
      <img src={adImage} alt="Advertisement Banner" className="img-fluid w-100" />
    </div>
  );
}

export default Advertisement;