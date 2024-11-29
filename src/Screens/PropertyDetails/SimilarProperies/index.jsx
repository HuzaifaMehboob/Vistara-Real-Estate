import React, { useRef } from 'react';
import pr_1 from '../../../assets/pr_1.png';
import pr_2 from '../../../assets/pr_2.png';
import pr_3 from '../../../assets/pr_3.png';
import pr_4 from '../../../assets/pr_4.png';
import pr_5 from '../../../assets/pr_5.png';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
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
];

const SimilarProperties = () => {
  const carouselRef = useRef(null);

  // Function to scroll the carousel left
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  // Function to scroll the carousel right
  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full py-2 bg-transparent my-10">
      <div className="text-center py-3 px-4">
        <div className="w-full mb-4 flex justify-between items-center py-3 px-3 border-b-2 border-green-700">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Similar Properties
          </h2>
          <div className="flex gap-3">
            <button
              className="bg-green-500 px-4 py-2 sm:py-3 rounded-xl text-white"
              onClick={scrollLeft}
            >
              <FaArrowLeft size={15} />
            </button>

            <button
              className="bg-green-500 px-4 py-2 sm:py-3 rounded-xl text-white"
              onClick={scrollRight}
            >
              <FaArrowRight size={15} />
            </button>
          </div>
        </div>

        {/* Horizontal Scrollable Carousel */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto scroll-smooth py-2 px-2 scrollbar-hidden"
        >
          {properties.map((property, index) => (
            <div
            key={index}
            className="flex-shrink-0 w-[50%] sm:w-[50%] md:w-[30%] lg:w-[22%] xl:w-[18%]"
          >
            <PropertyCard property={property} />
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimilarProperties;
