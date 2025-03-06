import React from 'react';
import { Link } from 'react-router-dom';
import apartmentImage from '../assets/images/NPS.jpeg';
import villaPdf from '../assets/pdfs/NPS Developers Brochure_MVRD.pdf';

const properties = [
  {
    id: 1,
    title: 'NPS Developers',
    description: 'A beautiful modern apartment in the city center.',
    image: apartmentImage,
  },
  {
    id: 2,
    title: 'Cozy Cottage',
    description: 'A cozy cottage in the countryside.',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 3,
    title: 'Luxury Villa',
    description: 'A luxury villa with a private pool.',
    image: 'https://via.placeholder.com/300x200',
  },
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero">
        <h1>Find Your Dream Home</h1>
        <p>Explore our exclusive properties and make your dream a reality.</p>
      </div>

      {/* Wrapper for Background Image */}
      <div className="featured-properties-wrapper">
        <h2>Featured Properties</h2>
        <div className="properties-list">
          {properties.map((property) => (
            <div key={property.id} className="property-card">
              <img src={property.image} alt={property.title} />
              <h3>{property.title}</h3>
              <p>{property.description}</p>
              <Link to={`/property/${property.id}`} className="view-details">
                View Details
              </Link>
              {property.id === 1 && (
                <a href={villaPdf} download="NPS_Developers_Brochure.pdf" className="download-brochure">
                  Download Brochure
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;