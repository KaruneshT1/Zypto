import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Footer.css'; // Ensure you have a CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <hr />
      <div className="container">

        {/* Popular Searches Section */}
        <h6>Popular Searches</h6>
        <div className="popular-searches">
          <p><strong>Products:</strong> 
            <Link to="#">Bottle gourd</Link> | <Link to="#">Lady finger</Link> | <Link to="#">Potato</Link> | 
            <Link to="#">Lemon</Link> | <Link to="#">Dalchini</Link> | <Link to="#">Fennel seeds</Link> | 
            <Link to="#">Blueberry</Link> | <Link to="#">Papaya</Link> | <Link to="#">Dragon fruit</Link>
          </p>
          <p><strong>Brands:</strong> 
            <Link to="#">Yakult</Link> | <Link to="#">My Muse</Link> | <Link to="#">Aashirvaad Atta</Link> | 
            <Link to="#">Too Yumm</Link> | <Link to="#">Lays</Link> | <Link to="#">Figaro Olive Oil</Link> | 
            <Link to="#">Nandini Milk</Link> | <Link to="#">Amul</Link> | <Link to="#">Mother Dairy Near Me</Link> | 
            <Link to="#">Fortune Oil</Link>
          </p>
          <p><strong>Categories:</strong> 
            <Link to="#">Grocery</Link> | <Link to="#">Curd</Link> | <Link to="#">Hukka flavour</Link> | 
            <Link to="#">Paan shop near me</Link> | <Link to="#">Eggs price</Link> | <Link to="#">Cheese slice</Link> | 
            <Link to="#">Fresh fruits</Link> | <Link to="#">Fresh vegetables</Link> | <Link to="#">Refined oil</Link> | 
            <Link to="#">Butter price</Link> | <Link to="#">Paneer price</Link>
          </p>
        </div>

        <hr />

        {/* Categories Section */}
        <h6>Categories</h6>
        <div className="categories">
          <div className="row">
            {[
              "Fruits & Vegetables", "Atta, Rice, Oil & Dals", "Masala & Dry Fruits", "Sweet Cravings",
              "Frozen Food & Ice Creams", "Baby Food", "Dairy, Bread & Eggs", "Cold Drinks & Juices",
              "Munchies", "Meats, Fish & Eggs", "Breakfast & Sauces", "Tea, Coffee & More",
              "Biscuits", "Makeup & Beauty", "Bath & Body", "Cleaning Essentials",
              "Home Needs", "Electricals & Accessories", "Hygiene & Grooming", "Health & Baby Care",
              "Homegrown Brands", "Paan Corner"
            ].map((category, index) => (
              <div key={index} className="col">
                <Link to="#">{category}</Link>
              </div>
            ))}
          </div>
        </div>

        <hr />

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-columns">
            <div className="footer-col">
              <h3>Zypto</h3>
              <div className="social-icons">
                <a href="#"><i className="fa-brands fa-facebook"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                <a href="#"><i className="fa-brands fa-youtube"></i></a>
              </div>
              <p>&copy; KiranaKart Technologies Private Limited</p>
            </div>
            <div className="footer-col">
              <Link to="/about-us">About Us</Link>
              <Link to="/FAQ">FAQ</Link>
              <Link to="#">Careers</Link>
              <Link to="#">Customer Support</Link>
            </div>
            <div className="footer-col">
              <Link to="#">Press</Link>
              <Link to="#">Privacy Policy</Link>
              <Link to="/terms-and-conditions">Terms of Use</Link>
              <Link to="#">Responsible Disclosure Policy</Link>
              <Link to="#">Mojo - a Zypto Blog</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
