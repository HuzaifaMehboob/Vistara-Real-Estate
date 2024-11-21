import React from 'react';
import pr_1 from '../../assets/pr_1.png';
import pr_2 from '../../assets/pr_2.png';
import pr_3 from '../../assets/pr_3.png';
import pr_4 from '../../assets/pr_4.png';
import pr_5 from '../../assets/pr_5.png';

const properties = [
  {
    title: 'Luxury waterfront',
    price: '$235,000',
    location: '303 Oceanview Avenue, Miami, FL',
    beds: 4,
    baths: 4,
    sqft: '4,500',
    image: pr_1,
  },
  {
    title: 'Lakeside retreat',
    price: '$625,000',
    location: '779 Lake Road, Greenfield, MI',
    image: pr_2,
  },
  {
    title: 'Charming cottage',
    price: '$845,000',
    location: '101 Oak Lane, Hillsboro, OR',
    image: pr_3,
  },
  {
    title: 'Grandview haven',
    price: '$540,000',
    location: '902 Ridge Drive, Beverly Hills, CA',
    image: pr_4,
  },
  {
    title: 'Sunny view manor',
    price: '$430,000',
    location: '123 Maple Street, Sunnyvale, CA',
    image: pr_5,
  },
  {
    title: 'Ocean breeze villa',
    price: '$420,000',
    location: '456 Elm Avenue, Downtown, NY',
    image: pr_1,
  },
];

const PropertyCard = ({ property, className }) => (
  <div className={`bg-white shadow-lg rounded-lg h-[400px] ${className}`}>
    <img src={property.image} alt={property.title} className="w-full h-64 object-cover rounded-t-lg mb-4" />
    <h3 className="text-lg font-semibold px-4">{property.title}</h3>
    <p className="text-gray-600 px-4">{property.location}</p>
    <p className="text-green-500 font-semibold px-4">{property.price}</p>
  </div>
);

const PropertyGrid = () => (
  <div className="max-w-6xl mx-auto flex flex-col items-center text-center py-6 px-4 sm:px-8">
    <h2 className="text-3xl font-bold mb-4">
      Find your home with <span className="text-green-500">unique preferences</span>
    </h2>
    <p className="text-gray-600 mb-6">
      Explore a curated selection of homes designed to match your unique preferences, making it effortless to find the ideal property that perfectly fits your lifestyle and needs.
    </p>
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {properties.map((property, index) => (
        <PropertyCard
          key={index}
          property={property}
          className={`${index % 2 === 1 ? 'sm:relative sm:top-4 ' : ''}`} // Slightly lower position for staggered effect
        />
      ))}
    </div>
    <button className="mt-12 py-2 px-6 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition">
      View All Properties
    </button>
  </div>
);

export default PropertyGrid;
