import React from "react";

const Header = () => {
  return (
    <header className="bg-transparent sticky top-0 z-20 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-green-500 w-6 h-6 rounded-md"></div>
          <span className="text-xl font-bold text-white">HomeQuest</span>
        </div>
        <button className="text-white hover:text-gray-200 focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
