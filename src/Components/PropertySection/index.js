import React from 'react';
import pr_1 from '../../assets/pr_1.png';
import pr_2 from '../../assets/pr_2.png';
import pr_3 from '../../assets/pr_3.png';
import pr_4 from '../../assets/pr_4.png';
import pr_5 from '../../assets/pr_5.png';
import { MdOutlineBed } from "react-icons/md";
import { LuBath } from "react-icons/lu";
import { LuScaling } from "react-icons/lu";
import { MdCallMade } from 'react-icons/md';

// Properties Data
const properties = [
  {
    title: 'Spacious 4-Bedroom Villa in Jumeirah, Dubai',
    price: '$1,405,000',
    location: 'Jumeirah, Dubai',
    beds: 3,
    baths: 2,
    sqft: '2,500',
    image: pr_1,
    status: 'For Sale',
  },
  {
    title: 'Charming 1-Bedroom Loft in Manhattan, New York',
    price: '$12,000',
    location: 'Manhattan, New York',
    beds: 3,
    baths: 2,
    sqft: '3,200',
    image: pr_2,
    status: 'For Rent',
  },
  {
    title: 'Luxurious 5-Bedroom House in Kensington, London',
    price: '$1,405,000',
    location: 'Kensington, London',
    beds: 3,
    baths: 2,
    sqft: '4,500',
    image: pr_3,
    status: 'For Sale',
  },
  {
    title: 'Modern 3-Bedroom Apartment in Downtown Toronto',
    price: '$850,000',
    location: 'Downtown Toronto',
    beds: 3,
    baths: 2,
    sqft: '1,800',
    image: pr_4,
    status: 'For Sale',
  },
  {
    title: 'Stylish 2-Bedroom Penthouse in Sydney, Australia',
    price: '$1,200,000',
    location: 'Sydney, Australia',
    beds: 2,
    baths: 1,
    sqft: '2,000',
    image: pr_5,
    status: 'For Sale',
  },
  {
    title: 'Elegant 4-Bedroom House in Beverly Hills, California',
    price: '$2,500,000',
    location: 'Beverly Hills, California',
    beds: 4,
    baths: 3,
    sqft: '3,800',
    image: pr_1,
    status: 'For Sale',
  },
];

// Property Card Component
const PropertyCard = ({ property }) => (
  <div className="bg-white border border-gray-200 shadow-sm rounded-xl overflow-hidden">
    {/* Image Section */}
    <div className="relative">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-64 object-cover"
      />
      <span className="absolute top-3 left-3 bg-white text-gray-800 text-sm font-semibold px-3 py-1 rounded-full shadow">
        {property.status}
      </span>
    </div>

    {/* Details Section */}
    <div className="p-6 text-left">
      <p className="text-green-600 font-bold text-lg">{property.price}</p>
      <h3 className="text-lg font-semibold text-gray-800 leading-snug">
        {property.title}
      </h3>
      <div className="flex gap-5 items-center mt-4 text-gray-500 ">
        <div className="flex items-center gap-2">
          <LuScaling size={20} />
          {property.sqft} sq. ft.
        </div>
        <div className="flex items-center gap-2">
          <MdOutlineBed size={20}/>
          {property.beds} Bed
        </div>
        <div className="flex items-center gap-2">
         <LuBath size={20}/>
          {property.baths} Bath
        </div>
      </div>
    </div>
  </div>
);

// Property Grid Component
const PropertyGrid = () => (
  <div className="max-w-7xl mx-auto flex flex-col items-center text-center py-10 px-6 sm:px-12">
    <h2 className="text-4xl font-bold mb-6">
      Exclusive Properties by <span className="text-green-500">HomeQuest</span>
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {properties.map((property, index) => (
        <PropertyCard key={index} property={property} />
      ))}
    </div>
    <button className="mt-12 py-3 px-6 flex items-center gap-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-800 hover:text-white transition">
      View More Properties
      <MdCallMade size={23} />
    </button>
  </div>
);

export default PropertyGrid;
