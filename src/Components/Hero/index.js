import hero_img from '../../assets/hero_img.png';
import React from 'react';
import person1 from '../../assets/person1.jpg'
import person2 from '../../assets/person2.jpg'
import person3 from '../../assets/person3.jpg'

const HeroSection = () => {
  return (
    <div className='w-full h-[90vh] bg-white absolute z-0'>
      <div className='w-full h-[50%] text-center flex justify-center pt-14 transparent relative z-10'>
        <h1 className='text-6xl font-bold'>Transforming Spaces,<br />Realizing<span className='text-red-500'> Dreams.</span></h1>
      </div>
      <div className='w-full h-[50%] bg-[#FBF0EA] flex justify-between relative z-[-1]'>
        <div className=' h-full w-[30%]   flex justify-center z-0'>

          <div className="flex flex-col items-center justify-center px-4  pl-4  w-48">
            {/* Avatar group */}
            <div className="flex items-center space-x-[-8px]">
              {/* Avatar images */}
              <img
                src={person1}
                alt="Avatar 1"
                className="w-10 h-10 rounded-full object-cover border-2 border-white"
              />
              <img
                src={person2}
                alt="Avatar 2"
                className="w-10 h-10 rounded-full object-cover border-2 border-white"
              />
              {/* Plus icon */}
              <div className="w-10 h-10 bg-red-500 text-white flex items-center justify-center rounded-full border-2 border-white">
                +
              </div>
            </div>

            {/* Rating Text */}
            <div className="mt-2 text-center">
              <p className="text-lg font-semibold">12K Rating</p>
              <p className="text-sm text-gray-500">(4.9 average)</p>
            </div>

            {/* Horizontal Divider */}
            <div className="w-12 border-t border-gray-300 mt-2"></div>

            {/* Down Arrow */}
            <div className="mt-2 text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
        <div className='w-[35%] h-[170%] object-cover bottom-60 relative z-10 '>
          <img src={hero_img} className="h-full w-full" />
        </div>
        <div className='h-full w-[30%]  z-0'>

          <div className="flex flex-col items-start  p-6 w-80 space-y-7">
            {/* Description Text */}
            <p className="text-gray-800 leading-relaxed">
              Turning your vision into reality by transforming spaces into perfect dream homes with expert care.
            </p>

            {/* Button */}
            <button className="flex items-center bg-red-500 text-white px-4 py-2 rounded-md font-semibold space-x-2 hover:bg-red-600 transition duration-200">
              <span>Explore Properties</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            {/* Decorative Element */}
            <div className="mt-4">
              <div className="w-4 h-4 bg-pink-200 rotate-45"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;
