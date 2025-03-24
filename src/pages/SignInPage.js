// src/pages/SignInPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/SignInPage.css'; // Import CSS file

const SignInPage = () => {
  return (
    <div className="signin-container">
      <div className="signin-form">
        <h2>Sign In</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" className="form-control" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="form-control" required />
          </div>
          <button type="submit" className="btn btn-primary">Sign In</button>
        </form>
        <p className="signup-link">
          Don't have an account? <Link to="/sign-up">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
