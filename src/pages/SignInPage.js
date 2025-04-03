import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/SignInPage.css'; // Import CSS file

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
  };

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
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="error-message">{error}</p>}
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