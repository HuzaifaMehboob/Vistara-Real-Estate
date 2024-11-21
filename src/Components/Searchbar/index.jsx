import React from "react";

const SearchBar = () => {
  return (
    <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-md max-w-md">
      <input
        type="text"
        placeholder="Search with a location"
        className="flex-1 focus:outline-none text-gray-800 text-sm"
      />
      <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full">
        Search Home
      </button>
    </div>
  );
};

export default SearchBar;
