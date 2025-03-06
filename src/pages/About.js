import React from "react";
import "./About.css"; // Import the new CSS file
import { FaBuilding, FaUsers, FaHandshake } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="about-hero">
        <h1>About Us</h1>
        <p>Your Trusted Partner in Real Estate</p>
      </div>

      {/* Company Overview Section */}
      <div className="about-content">
        <div className="about-card">
          <FaBuilding className="about-icon" />
          <h2>Who We Are</h2>
          <p>
            MahaVruksha Realty & Developers is a leading real estate firm
            committed to providing world-class properties and unmatched service.
          </p>
        </div>

        <div className="about-card">
          <FaUsers className="about-icon" />
          <h2>Our Mission</h2>
          <p>
            Our mission is to help individuals and families find their dream
            homes with integrity, innovation, and excellence.
          </p>
        </div>

        <div className="about-card">
          <FaHandshake className="about-icon" />
          <h2>Why Choose Us?</h2>
          <p>
            With years of expertise and a client-first approach, we ensure a
            seamless buying and selling experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
