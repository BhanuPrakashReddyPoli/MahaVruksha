import React from 'react';
import { useParams } from 'react-router-dom';

const properties = [
  {
    id: 1,
    title: 'NPS Project',
    image: 'https://via.placeholder.com/300x200',
    price: 'Contact for price',
    location: 'Bangalore, India',
    amenities: ['Gym', 'Pool', 'Security'],
  },
  {
    id: 2,
    title: 'Luxury Villa',
    image: 'https://via.placeholder.com/300x200',
    price: '$1,200,000',
    location: 'Los Angeles, CA',
    amenities: ['Private Pool', 'Theater', 'Wine Cellar'],
  },
];

const PropertyDetails = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === parseInt(id));

  if (!property) return <div>Property not found!</div>;

  return (
    <div className="content-container">
      <h2>{property.title}</h2>
      <img src={property.image} alt={property.title} />
      <p><strong>Price:</strong> {property.price}</p>
      <p><strong>Location:</strong> {property.location}</p>
      <h3>Amenities</h3>
      <ul>
        {property.amenities.map((amenity, index) => (
          <li key={index}>{amenity}</li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyDetails;
