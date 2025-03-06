import React from 'react';
import { useParams } from 'react-router-dom';
import apartmentImage from '../assets/images/NPS.jpeg';

const PropertyDetails = () => {
  const { id } = useParams();
  const properties = [
    {
      id: 1,
      title: 'NPS Developers',
      description: 'A beautiful modern apartment in the city center.',
      image: apartmentImage,
      price: 'Contact 9980802017',
      location: 'Dodabannahalli, Bengaluru',
      amenities: ['Swimming Pool', 'Gym', 'Park', '24/7 Security'],
    },
    {
      id: 2,
      title: 'Cozy Cottage',
      description: 'A cozy cottage in the countryside.',
      image: 'https://via.placeholder.com/300x200',
      price: '$300,000',
      location: 'Austin, TX',
      amenities: ['Garden', 'Fireplace', 'Garage'],
    },
    {
      id: 3,
      title: 'Luxury Villa',
      description: 'A luxury villa with a private pool.',
      image: 'https://via.placeholder.com/300x200',
      price: '$1,200,000',
      location: 'Los Angeles, CA',
      amenities: ['Private Pool', 'Home Theater', 'Wine Cellar'],
    },
  ];

  const property = properties.find((p) => p.id === parseInt(id));

  if (!property) {
    return <div>Property not found!</div>;
  }

  return (
    <div>
      <h2>{property.title}</h2>
      <img src={property.image} alt={property.title} />
      <p>{property.description}</p>
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