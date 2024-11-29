import React from "react";

const propertyDetails = [
  { label: "Type", value: "House" },
  { label: "Price", value: "PKR 4.1 Crore" },
  { label: "Location", value: "Bahria Town, Islamabad, Isl..." },
  { label: "Bath(s)", value: "6" },
  { label: "Area", value: "10 Marla" },
  { label: "Purpose", value: "For Sale" },
  { label: "Bedroom(s)", value: "5" },
  { label: "Added", value: "3 hours ago" },
];

const DetailsCard = () => {
  return (
    <div className="w-full bg-white border border-gray-300 rounded-md shadow">
      <div className="grid grid-cols-2">
        {propertyDetails.map((detail, index) => (
          <div
            key={index}
            className={`py-3 px-6 grid grid-cols-2 ${
              Math.floor(index / 2) % 2 === 0 ? "bg-gray-100" : "bg-white"
            }`}
          >
            <div className="font-medium text-gray-700">{detail.label}</div>
            <div className="text-gray-900">{detail.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailsCard;
