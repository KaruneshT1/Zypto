import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/SignInPage.css'; // Import CSS file

const SignInPage = () => {
  return (
    <div className="signin-container">
      {/* Left Section (2/3 Width) */}
      <div className="signin-left">
        <h1>Zypto</h1>
      </div>

      {/* Right Section (1/3 Width) */}
      <div className="signin-right">
        <div className="signin-box">
          <h2>Sign In</h2>
          <form>
            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" className="form-control" required />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" className="form-control" required />
            </div>
            <button type="submit" className="signin-btn">Sign In</button>
          </form>
          <p className="signup-link">
            Don't have an account? <Link to="/sign-up">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
