import React from "react";
import { MdCallMade } from "react-icons/md";

const Description = () => {
  const stats = [
    { title: "200+", subtitle: "Modern Properties" },
    { title: "98%", subtitle: "Client Satisfaction" },
    { title: "12+", subtitle: "Years of Experience" },
    { title: "20+", subtitle: "Award Winning" },
  ];

  return (
    <div className="w-full bg-gradient-to-r from-green-100 to-gray-200 py-20 px-6 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Section */}
        <div className="w-full md:w-[50%] space-y-6 text-center md:text-left">
          <h3 className="text-4xl font-semibold text-gray-800 leading-tight tracking-wide">
            Building dreams into{" "}
            <span className="text-green-500">Stunning Real Estate</span>
          </h3>
          <p className="text-lg text-gray-600 font-medium leading-relaxed">
            We take pride in our track record of excellence and innovation in
            the real estate industry. Here’s a glimpse of our remarkable
            achievements.
          </p>
          <button className="mt-6 px-6 py-3 bg-green-600 text-white mx-auto lg:mx-0 sm:mx-0 md:mx-0 font-semibold rounded-md shadow-md hover:bg-green-700 transition duration-300 self-center md:self-start flex items-center gap-2">
            <p>More About Us</p>
            <MdCallMade size={20} />
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-[40%] grid grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 text-center rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <h4 className="text-3xl font-semibold text-gray-800">{stat.title}</h4>
              <p className="text-lg text-gray-500 mt-2">{stat.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Description;
