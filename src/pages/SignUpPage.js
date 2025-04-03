import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/SignUpPage.css"; // Import CSS file

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  // Regular Expressions for Validation
  const patterns = {
    name: /^[A-Za-z]+$/, // Only letters
    mobile: /^\+?[0-9]*$/, // Only numbers, with optional +
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // One @ and one .
    password: /^(?=.*\d)(?=.*[!@#$%^&*()_+{}:;<>,.?~]){2,}.{8,}$/, // At least 8 chars, 2 special chars, 1 number
  };

  // Handle Input Change & Validate
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    let error = "";
    if (name === "firstName" || name === "lastName") {
      if (!patterns.name.test(value)) error = "Only letters are allowed.";
    } 
    else if (name === "mobile") {
      if (!patterns.mobile.test(value)) error = "Invalid mobile number format.";
    } 
    else if (name === "email") {
      if (!patterns.email.test(value)) error = "Invalid email format.";
    } 
    else if (name === "password") {
      if (!patterns.password.test(value)) error = "Password must be 8+ chars, 2 special chars, 1 number.";
    } 
    else if (name === "confirmPassword") {
      if (value !== formData.password) error = "Passwords do not match.";
    }

    setErrors({ ...errors, [name]: error });
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default HTML form validation
    if (Object.values(errors).some((err) => err) || Object.values(formData).some((val) => !val)) {
      alert("Please fix errors before submitting.");
      return;
    }
    alert("Account Created Successfully!");
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          {/* First Name & Last Name */}
          <div className="form-group-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="form-control"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <p className="error">{errors.firstName}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="form-control"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <p className="error">{errors.lastName}</p>}
            </div>
          </div>

          {/* Mobile */}
          <div className="form-group">
            <label htmlFor="mobile">Mobile</label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              className="form-control"
              value={formData.mobile}
              onChange={handleChange}
            />
            {errors.mobile && <p className="error">{errors.mobile}</p>}
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="text" // Changed from "email" to "text" to bypass HTML validation
              id="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          {/* Password */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          {/* Confirm Password */}
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="form-control"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary">Create Account</button>
        </form>

        {/* Already have an account? */}
        <p className="signin-link">
          Already have an account? <Link to="/sign-in">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;