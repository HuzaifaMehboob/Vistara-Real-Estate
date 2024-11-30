import React from 'react';
import { MdOutlineBed } from 'react-icons/md';
import { LuBath, LuScaling } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';

const PropertyCard = ({property}) => {
  const navigate =  useNavigate()
  return (
    <div onClick={()=>navigate("/details")} className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden sm:max-w-full">
      {/* Image */}
      <div className="relative">
        <img
          className="w-full h-32 lg:h-52 md:h-52 object-cover sm:h-52"
          src={property.image}
          alt="Property"
        />
        <div className="absolute top-2 left-2 flex space-x-2 ">
          <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
            Featured
          </span>
          <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">
            Sales
          </span>
          <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
            Active
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-3 lg:p-4 text-left">
        <h2 className="text-lg font-semibold text-gray-800">
          Townhouse for Sale
        </h2>
        <p className="text-red-500 text-xl font-bold">$345.18</p>
        <p className="text-gray-600 text-xs lg:text-sm md:text-sm sm:text-sm mt-2">
          Beautiful, updated, ground level Co-op apartment in the desirable Bay
          Terrace neighborhood
        </p>
        {/* Details */}
        <div className="flex gap-3 lg:gap-6 md:gap-6 sm:gap-6 items-center mt-4 text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <MdOutlineBed className="text-lg text-gray-700" />
            <span>3</span>
          </div>
          <div className="flex items-center space-x-1">
            <LuBath className="text-lg text-gray-700" />
            <span>4</span>
          </div>
          <div className="flex items-center space-x-1">
            <LuScaling className="text-lg text-gray-700" />
            <span>450 sq ft</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      
    </div>
  );
};

export default PropertyCard;
