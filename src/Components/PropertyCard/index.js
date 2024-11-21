import React from 'react';
import { MdArrowForward } from "react-icons/md";

const PropertyCard = ({ image, title, price, address, beds, baths, area }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden group">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-64 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center opacity-0 group-hover:opacity-100 transition">
          <MdArrowForward size={30} className="text-white" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-500 text-sm">{address}</p>
        <div className="flex justify-between items-center text-gray-700 text-sm mt-2">
          <span>{beds} Beds</span>
          <span>{baths} Baths</span>
          <span>{area} Sqft</span>
        </div>
        <p className="text-green-500 font-bold text-lg mt-2">{price}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
