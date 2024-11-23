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
    <div className="w-full bg-white py-28 px-6 md:px-24 flex flex-col md:flex-row justify-between items-center gap-10">
      {/* First Div */}
      <div className="w-full md:w-[40%] flex flex-col space-y-6 text-center md:text-left">
        <h3 className="text-4xl font-bold">
          Building dreams into stunning{" "}
          <span className="text-green-500">real estate</span>
        </h3>
        <p className="text-gray-700 text-lg">
          We take pride in our track record of excellence and innovation in the real estate industry. Here's a glimpse of our notable achievements.
        </p>
        <button className="px-4 py-2 flex items-center gap-1 border-2 border-gray-400 hover:bg-gray-100 transition self-center md:self-start">
          <p>More About Us</p>
          <MdCallMade size={20} />
        </button>
      </div>

      {/* Second Div */}
      <div className="w-full md:w-[35%] grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white border-2 border-[#CCFF00] p-5 text-center rounded-lg flex flex-col justify-center h-full"
          >
            <h4 className="text-3xl font-bold">{stat.title}</h4>
            <p className="text-gray-600">{stat.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Description;
