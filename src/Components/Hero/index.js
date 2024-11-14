import hero_img from '../../assets/hero_img.png';
import React from 'react';
import person1 from '../../assets/person1.jpg';
import person2 from '../../assets/person2.jpg';
import person3 from '../../assets/person3.jpg';

const HeroSection = () => {
  return (
    <div className="w-full h-auto lg:h-[90vh] md:h-[120vh] z-0 flex flex-col justify-between">
      <div className="w-full h-auto md:h-[30%] text-center flex justify-center pt-6 md:pt-8 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold">
          Transforming Spaces,
          <br />
          Realizing <span className="text-red-500">Dreams.</span>
        </h1>
      </div>
      <div className="w-full h-auto md:h-[40%]   md:bg-blue-100 bg-[#FBF0EA] flex flex-col md:flex-row justify-between items-center relative z-0 md:z-[-1] px-4 md:px-0">
        <div className="h-full w-full md:w-[30%] flex justify-center mb-8 md:mb-0">
          <div className="flex flex-col items-center justify-center px-4 pl-4 w-full max-w-xs">
            <div className="flex items-center space-x-[-8px]">
              <img
                src={person1}
                alt="Avatar 1"
                className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover border-2 border-white"
              />
              <img
                src={person2}
                alt="Avatar 2"
                className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover border-2 border-white"
              />
              <div className="w-8 h-8 md:w-10 md:h-10 bg-red-500 text-white flex items-center justify-center rounded-full border-2 border-white">
                +
              </div>
            </div>
            <div className="mt-2 text-center">
              <p className="text-lg font-semibold">12K Rating</p>
              <p className="text-sm text-gray-500">(4.9 average)</p>
            </div>
            <div className="w-12 border-t border-gray-300 mt-2"></div>
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
        <div className="w-full md:w-[35%] h-[240px] md:h-auto object-cover relative z-10 -mt-24 md:-mt-40 lg:bottom-20 bottom-14">
          <img src={hero_img} className="h-full w-full object-cover" alt="Hero" />
        </div>
        <div className="h-full w-full md:w-[30%] flex justify-center items-center mb-8 md:mb-0">
          <div className="flex flex-col items-start p-4 md:p-6 w-full max-w-xs space-y-4 md:space-y-7">
            <p className="text-gray-800 leading-relaxed text-center md:text-left">
              Turning your vision into reality by transforming spaces into perfect dream homes with expert care.
            </p>
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
