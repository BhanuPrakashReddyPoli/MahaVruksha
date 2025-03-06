import React from "react";
import "./Contact.css"; // Import the new CSS file
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Hero Section */}
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>Get in touch with us for inquiries and assistance</p>
      </div>

      {/* Contact Information Section */}
      <div className="contact-info">
        <div className="contact-card">
          <FaPhoneAlt className="contact-icon" />
          <h2>Call Us</h2>
          <p>+91 9980802017</p>
        </div>

        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h2>Email Us</h2>
          <p>Mahavruksha.contact@gmail.com</p>
        </div>

        <div className="contact-card">
          <FaMapMarkerAlt className="contact-icon" />
          <h2>Visit Us</h2>
          <p>Whitefield, Bengaluru, India</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
