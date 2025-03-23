import React from 'react';

function LocationModel() {
  const showModal = () => {
    var myModal = new bootstrap.Modal(document.getElementById('locationModal'));
    myModal.show();
  };

  return (
    <button id="location-btn" onClick={showModal}>Choose Location</button>
  );
}

export default LocationModel;
