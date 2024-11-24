import React from "react";
import { SiDwavesystems } from "react-icons/si";
import { GiWaveStrike } from "react-icons/gi";
import { FaGlobe } from "react-icons/fa";
import { SiPointy } from "react-icons/si";
import { SiSitepoint } from "react-icons/si";

const TrustedBy = ({color}) => {
  return (
    <section className={`${color==="white" ? 'bg-transparent' : 'bg-[#CCFF00]'} py-8`}>

      <div className="max-w-7xl mx-auto px-4 space-y-8">
        <h2 className="text-center text-xl  font-semibold mb-6 text-gray-800">
          Trusted by leading companies
        </h2>
        <div className="flex justify-center items-center space-x-20">
          <div className="flex items-center space-x-2">
            <SiDwavesystems className="w-12 h-12 text-gray-800" />
            <span className="text-gray-800 text-lg font-semibold">FocalPoint</span>
          </div>
          <div className="flex items-center space-x-2">
            <GiWaveStrike className="w-12 h-12 text-gray-800" />
            <span className="text-gray-800 text-lg font-semibold">Command+R</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaGlobe className="w-12 h-12 text-gray-800" />
            <span className="text-gray-800 text-lg font-semibold">GlobalBank</span>
          </div>
          <div className="flex items-center space-x-2">
            <SiPointy className="w-12 h-12 text-gray-800" />
            <span className="text-gray-800 text-lg font-semibold">Alt+Shift</span>
          </div>
          <div className="flex items-center space-x-2">
            <SiSitepoint className="w-12 h-12 text-gray-800" />
            <span className="text-gray-800 text-lg font-semibold">Luminous</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
