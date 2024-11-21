import React from 'react';
import pr_1 from '../../assets/pr_1.png';
import pr_2 from '../../assets/pr_2.png';
import pr_3 from '../../assets/pr_3.png';
import { MdCallMade } from 'react-icons/md';

const properties = [
  {
    description: 'Essential tips for first-time home buyers: your complete guide',
    date: 'Dec 20, 2023',
    image: pr_1,
  },
  {
    description: 'Navigating the rental market: tips for renters and landlords',
    date: 'Dec 29, 2023',
    image: pr_2,
  },
  {
    description: 'Choosing the best neighborhood for your family: expert guide',
    date: 'Jan 12, 2024',
    image: pr_3,
  },
];

const PropertyCard = ({ property, className }) => (
  <div className={`bg-white shadow-lg rounded-lg h-[400px] ${className}`}>
    <img
      src={property.image}
      alt={property.description}
      className="w-full h-64 object-cover rounded-t-lg mb-4"
    />
    <p className="text-gray-600 px-4">{property.date}</p>
    <h3 className="text-lg font-semibold px-4">{property.description}</h3>
  </div>
);

const PropertyGrid = () => (
  <div className="max-w-6xl mx-auto flex flex-col items-center text-center pt-10 pb-20 px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold mb-4">
      Our newest updates and <span className="text-green-500">insights</span>
    </h2>
    <p className="text-gray-600 mb-6">
      Stay up-to-date with our latest news and blog posts, offering valuable
      insights and updates on industry trends and expert tips.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {properties.map((property, index) => (
        <PropertyCard
          key={index}
          property={property}
          className={`${index % 2 === 1 ? 'sm:relative sm:top-4' : ''}`}
        />
      ))}
    </div>
    <button className="mt-12 py-3 px-6 flex items-center gap-2 border-2 border-slate-500 text-black font-semibold rounded-lg hover:bg-gray-100 transition">
      View All Insights
      <MdCallMade size={23} />
    </button>
  </div>
);

export default PropertyGrid;
