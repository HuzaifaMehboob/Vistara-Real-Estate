import React from "react";
import { SiDwavesystems, SiPointy, SiSitepoint } from "react-icons/si";
import { GiWaveStrike } from "react-icons/gi";
import { FaGlobe } from "react-icons/fa";

const classvalue = "lg:w-12 lg:h-12 h-8 w-8 text-gray-800"
const companyData = [
  { id: 1, icon: <SiDwavesystems className={classvalue} />, name: "FocalPoint" },
  { id: 2, icon: <GiWaveStrike className={classvalue} />, name: "Command+R" },
  { id: 3, icon: <FaGlobe className={classvalue} />, name: "GlobalBank" },
  { id: 4, icon: <SiPointy className={classvalue} />, name: "Alt+Shift" },
  { id: 5, icon: <SiSitepoint className={classvalue} />, name: "Luminous" },
];

const TrustedBy = ({ color }) => {
  return (
    <section className={`${color === "white" ? "bg-transparent" : "bg-gray-100"} py-8`}>
      <div className="max-w-7xl mx-auto px-4 space-y-10">
        <h2 className="text-center text-3xl font-bold mb-6 text-gray-800">
          Trusted by leading companies
        </h2>
        <div className="flex flex-wrap lg:justify-around px-0 lg:px-10 md:px-10 md:justify-between sm:justify-center justify-center gap-8 items-center">
          {companyData.map((company) => (
            <div key={company.id} className="flex flex-col items-center space-y-2">
              {company.icon}
              <span className="text-gray-800 text-lg font-semibold text-center">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
