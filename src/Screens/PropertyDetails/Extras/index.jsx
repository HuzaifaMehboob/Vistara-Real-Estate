import React from "react";

const UsefulLinks = () => {
  return (
    <div className="bg-white border-2 border-gray-300 rounded-md shadow-md p-4 w-full mt-10">
      <h2 className="text-lg font-semibold mb-3">Useful Links</h2>
      <ul className="space-y-2 text-sm text-black">
        <li>
          <a href="#" className="hover:underline hover:text-blue-600">
            Property for sale in Islamabad
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline hover:text-blue-600">
            Property for sale in Bahria Town
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline hover:text-blue-600">
            Property for sale in Bahria Enclave
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline hover:text-blue-600">
            10 Marla Houses for sale in Islamabad
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline hover:text-blue-600">
            10 Marla Houses for sale in Bahria Town
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline hover:text-blue-600">
            10 Marla Houses for sale in Bahria Enclave
          </a>
        </li>
      </ul>
      <button
        className="mt-4  w-full text-white bg-gray-600 hover:bg-blue-700 py-2 px-4 rounded-md" 
        onClick={() => alert("Report functionality coming soon!")}
      >
        Report this property
      </button>
    </div>
  );
};

export default UsefulLinks;
