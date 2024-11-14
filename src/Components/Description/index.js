
import React from 'react';
import { MdCallMade } from "react-icons/md";

const Description = () => {
  return (
    <div className="w-full  bg-white py-5 mt-14 mb-5 px-20 flex justify-between items-center gap-10">
      <div className="w-[40%] flex flex-col space-y-6">
        <h3 className="text-4xl font-bold">
          Building dreams into stunning <span className="text-red-500"> real estate</span>
        </h3>
        <p className="text-gray-700 text-lg">
          We take pride in our track record of excellence and innovation in the real estate industry. Here's a glimpse of our notable achievements.
        </p>
        <button className="px-4 py-2 flex items-center gap-1 border-2 border-gray-400 hover:bg-gray-100 transition inline-flex self-start">
          <p>More About Us</p>
          <MdCallMade size={20} />
        </button>
      </div>

      {/* Second div with grid structure */}
      <div className="w-[35%] h-[250px] grid grid-cols-2 gap-4">
        <div className="bg-[#FBF0EA] p-5 text-center rounded-lg">
          <h4 className="text-3xl font-bold">200+</h4>
          <p className="text-gray-600">Modern Properties</p>
        </div>
        <div className="bg-[#FBF0EA] p-5 text-center rounded-lg">
          <h4 className="text-3xl font-bold">98%</h4>
          <p className="text-gray-600">Client Satisfaction</p>
        </div>
        <div className="bg-[#FBF0EA] p-5 text-center rounded-lg">
          <h4 className="text-3xl font-bold">12+</h4>
          <p className="text-gray-600">Years of Experience</p>
        </div>
        <div className="bg-[#FBF0EA] p-5 text-center rounded-lg">
          <h4 className="text-3xl font-bold">20+</h4>
          <p className="text-gray-600">Award Winning</p>
        </div>
      </div>
    </div>
  );
};

export default Description;
