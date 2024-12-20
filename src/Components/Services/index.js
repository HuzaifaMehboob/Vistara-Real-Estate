import React from 'react';
import person1 from '../../assets/person1.jpg';

const Services = () => {
  return (
    <div className="flex flex-wrap justify-center mt-8 mb-14 items-start bg-gray-100 p-6 sm:p-10">
      {/* Left Side - Heading and Image */}
      <div className="w-full sm:w-1/2 p-5 flex flex-col items-center sm:items-start mb-8 sm:mb-0">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center sm:text-left leading-tight">
          Discover the range of real estate <span className="text-green-500">services</span> we offer
        </h2>
        <div className="w-full p-2">
          <img
            src={person1}
            alt="Person in suit"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Right Side - Service List */}
      <div className="w-full sm:w-1/2  p-5 flex justify-center sm:justify-start">
        <div className="w-full max-w-md sm:max-w-none border border-dashed border-gray-300 bg-gray-200 p-6 space-y-8  lg:space-y-14  rounded-lg shadow-2xl">
          {/* Service 1 */}
          <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-x-3 sm:space-y-0">
            <span className="text-2xl font-bold text-gray-600">01</span>
            <div>
              <h4 className="text-xl font-semibold">Buy a home</h4>
              <p className="text-gray-600">
                Find your ideal home effortlessly with our expert guidance & extensive property listings, ensuring a smooth and satisfying home-buying experience.
              </p>
            </div>
          </div>
          
          {/* Service 2 */}
          <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-x-3 sm:space-y-0">
            <span className="text-2xl font-bold text-gray-600">02</span>
            <div>
              <h4 className="text-xl font-semibold">Rent a home</h4>
              <p className="text-gray-600">
                Find your perfect rental home with ease. Our service offers personalized options and expert support to help you secure a comfortable and ideal living space.
              </p>
            </div>
          </div>
          
          {/* Service 3 */}
          <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-x-3 sm:space-y-0">
            <span className="text-2xl font-bold text-gray-600">03</span>
            <div>
              <h4 className="text-xl font-semibold">Property management</h4>
              <p className="text-gray-600">
                Expert property management to handle maintenance, tenant relations, and financials, ensuring your property runs smoothly and remains profitable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
