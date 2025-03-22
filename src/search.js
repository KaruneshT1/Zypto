import React from 'react';
import ReactDOM from 'react-dom';
import Advertisement from './Advertisement';  // Import the Advertisement component

const rootElement = document.getElementById('advertisement-container');
if (rootElement) {
  ReactDOM.render(<Advertisement />, rootElement);  // Mount Advertisement here
}
