import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Navbar.css';

function Navbar() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand logo" to="/">Zypto</Link>

          {/* Select Location Button */}
          <div className="dropdown">
            <button
              className="btn btn-outline-primary me-3 select-location-btn"
              data-bs-toggle="modal"
              data-bs-target="#locationModal"
            >
              Select Location <i className="fas fa-angle-down"></i>
            </button>
          </div>

          {/* Search Bar */}
          <Link to="/search" className="input-group search-bar text-decoration-none">
            <span className="input-group-text bg-white border-end-0">
              <i className="fas fa-search"></i>
            </span>
            <input
              type="text"
              id="search-input"
              placeholder="Search for Cheese..."
              className="form-control border-start-0"
              readOnly // Prevent typing since it's just a link
            />
          </Link>

          {/* Buttons */}
          <div className="ms-auto">
            <Link className="btn btn-outline-secondary login-btn" to="/sign-up">
              <i className="fas fa-user"></i> Login
            </Link>
            <Link className="btn btn-outline-success cart-btn" to="/cart">
              <i className="fas fa-shopping-cart"></i> Cart
            </Link>
          </div>
        </div>
      </nav>

      {/* Location Modal */}
      <div className="modal fade" id="locationModal" tabIndex="-1" aria-labelledby="locationModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="locationModalLabel">Select Location</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="locationInput" className="form-label">Location</label>
                  <select className="form-select" id="locationInput">
                    <option defaultValue>Choose your location</option>
                    <option value="1">Chrompet</option>
                    <option value="2">Coimbatore</option>
                    <option value="3">Pallavaram</option>
                    <option value="4">Chengalpattu</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;