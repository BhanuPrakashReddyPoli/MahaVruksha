import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PropertyDetails from './pages/PropertyDetails';
import './index.css';

const App = () => {
  return (
    <Router>
      <div>
        <header className="navbar">
          <div className="left">
            <Link to="/login" className="nav-link">Login</Link>
          </div>
          <div className="right">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
        </Routes>
      </div>
      <footer className="footer">
  <p>© 2025 MahaVruksha Realty & Developers. All rights reserved.</p>
</footer>

    </Router>
  );
};

export default App;
