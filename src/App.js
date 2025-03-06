import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './index.css';
import PropertyDetails from './pages/PropertyDetails';

const App = () => {
  return (
    <Router>
      <div>
        <header>
          <h1>MahaVruksha Realty & Developers</h1>
        </header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
        </Routes>
        <footer>
          <p>&copy; 2023 Real Estate Company. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;