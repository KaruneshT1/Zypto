import React from "react";
import "../assets/css/AboutUsPage.css";

const AboutUsPage = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Zytpo</h1>
        <p>Revolutionizing Quick Commerce with Speed & Convenience</p>
      </header>

      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          Zytpo is a next-generation quick-commerce platform that delivers 
          groceries, essentials, and more at lightning speed. We bridge the 
          gap between local stores and customers, making shopping effortless 
          and instant.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          To redefine online shopping by providing <strong>ultra-fast delivery </strong>
          with a seamless experience, ensuring that your essentials are 
          just a tap away.
        </p>
      </section>

      <section className="about-section">
        <h2>Why Choose Us?</h2>
        <ul>
          <li> <strong>Super Fast Deliveries</strong> – Get your orders in minutes!</li>
          <li> <strong>Hyperlocal Approach</strong> – We connect local stores with you.</li>
          <li> <strong>Seamless Payments</strong> – Multiple payment options for convenience.</li>
          <li> <strong>Wide Product Range</strong> – Groceries, essentials & more.</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Our Team</h2>
        <p>
          A passionate team of innovators, tech experts, and logistics 
          professionals, committed to making Zytpo the fastest and most 
          reliable delivery platform.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Promise to You</h2>
        <p>
          We prioritize speed, quality, and customer satisfaction above all 
          else. Your trust in Zytpo drives us to improve every day!
        </p>
      </section>
    </div>
  );
};

export default AboutUsPage;
