import React from 'react';
import { Link } from 'react-router-dom';
import apartmentImage from '../assets/images/NPS.jpeg';
import Nandana from '../assets/images/bcg.png';
import MKB from '../assets/images/MKB.jpeg';
import Gokulam from '../assets/images/Gokulam.jpg';
import villaPdf from '../assets/pdfs/NPSpdf.pdf';

const properties = [
  {
    id: 1,
    title: 'NPS Project',
    image: apartmentImage,
  },
  {
    id: 2,
    title: 'Mukundha Nandana',
    image: Nandana,
  },
  {
    id: 3,
    title: 'Mukundha Brundhavan ',
    image: MKB,
  },
  {
    id: 4,
    title: 'Mukundha Gokulam',
    image: Gokulam,
  },
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <h1>MahaVruksha Realty & Developers</h1>
        <p>Your dream home is just a click away.</p>
      </section>

      {/* Properties Section */}
      <section className="properties-container">
        {properties.map((property) => (
          <div key={property.id} className="property-card">
            <img src={property.image} alt={property.title} />
            <h3>{property.title}</h3>
            <Link to={`/property/${property.id}`} className="view-details">
              View Details
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
