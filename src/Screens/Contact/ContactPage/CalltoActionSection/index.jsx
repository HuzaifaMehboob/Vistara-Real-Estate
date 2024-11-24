import React from "react";
import call_pic from '../../../../assets/call_pic.jpg';

const CallToActionSection = () => {
  return (
    <div 
      className="relative w-full px-10 lg:px-24 h-[120vh] mt-14 rounded-t-3xl bg-transparent bg-cover bg-center" 
      style={{ backgroundImage: `url(${call_pic})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 rounded-t-3xl"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col pt-36 items-center h-full text-center text-white ">
        <h1 className="text-xl lg:text-7xl md:text-5xl font-semibold mb-6">
          Ready to make a move?
        </h1>
        <p className="text-lg md:text-xl lg:text-xl mb-8">
          Contact us today to discuss your property needs and choose the right plan.<br/> We're here to guide you through every step of the process.
        </p>
        <button className="bg-lime-500 text-black font-medium px-6 py-3 rounded-full hover:bg-lime-600 transition duration-300">
          Get Your Home
        </button>
      </div>
    </div>
  );
};

export default CallToActionSection;
