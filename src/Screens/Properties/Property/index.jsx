
import pr_1 from '../../../assets/pr_1.png';
import pr_2 from '../../../assets/pr_2.png';
import pr_3 from '../../../assets/pr_3.png';
import pr_4 from '../../../assets/pr_4.png';
import pr_5 from '../../../assets/pr_5.png';
import { MdOutlineBed } from "react-icons/md";
import React, { useState, useEffect, useRef } from "react"
import { VscSettings } from "react-icons/vsc";
import { IoIosSearch } from "react-icons/io";
import { useSpring} from "react-spring"; 
import Pagination from '../../../Components/Pagination';
import { useNavigate } from 'react-router-dom';
import PropertyCard from '../../../Components/PropertyCard';

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
];




// Property Grid Component
const PropertyComp = ({
    currentPage,
    totalPages,
    onPageChange 
}) => {

  return (
  
    <div className="max-w-7xl mx-auto flex flex-col bg-gray-100 pt-8 pb-20 px-3 md:px-6 lg:px-6 sm:px-5">
  {/* Header Section */}
  <div className="w-full mb-4 flex justify-between items-center py-2 px-3 border-b-2 border-green-700">
    <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold">
      All Properties
    </h2>
    <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
      <button className="bg-gray-400 p-2 sm:p-2 md:p-3 lg:p-3 rounded-full text-white flex items-center justify-center">
        <IoIosSearch className="text-sm sm:text-base md:text-lg lg:text-xl" />
      </button>
      <button className="bg-green-800 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2 rounded-lg flex items-center gap-2 text-white">
        <VscSettings className="text-sm sm:text-base md:text-lg lg:text-xl" />
        <h5 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold">
          Filter
        </h5>
      </button>
    </div>
  </div>


    
    <div  className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:gap-10 md:gap-8 sm:gap-6 gap-4  `}  >
      {properties.map((property, index) => (
        <PropertyCard key={index} property={property} />
      ))}
    </div>
    <Pagination
     currentPage={currentPage}
     totalPages={totalPages}
     onPageChange={onPageChange}
    />
  </div>
);
}

export default PropertyComp;
