import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Search from "./pages/Search";
import Product from "./pages/Product";
import "./assets/css/styles.css"; // Import global CSS

const searchContainer = document.getElementById("search-root");
const productContainer = document.getElementById("product-root");
const mainContainer = document.getElementById("root");

if (mainContainer) {
  ReactDOM.createRoot(mainContainer).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

if (searchContainer) {
  ReactDOM.createRoot(searchContainer).render(
    <React.StrictMode>
      <Search />
    </React.StrictMode>
  );
}

if (productContainer) {
  ReactDOM.createRoot(productContainer).render(
    <React.StrictMode>
      <Product />
    </React.StrictMode>
  );
}
