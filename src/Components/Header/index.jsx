import React from "react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-500 to-gray-400 p-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="bg-lime-400 text-white p-2 rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 10v10a1 1 0 001 1h6a1 1 0 001-1V10m10 0v10a1 1 0 01-1 1h-6a1 1 0 01-1-1V10M9 21V7a2 2 0 012-2h2a2 2 0 012 2v14"
            />
          </svg>
        </div>
        <span className="text-white font-semibold text-lg">HomeQuest</span>
      </div>

      {/* Navigation Links */}
      <nav className="flex items-center space-x-6 text-white">
        <div className="relative group">
          <button className="focus:outline-none">All Pages</button>
          {/* Dropdown */}
          <div className="absolute hidden group-hover:block bg-white text-black shadow-lg mt-2 rounded">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Page 1</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Page 2</li>
            </ul>
          </div>
        </div>
        <a href="#" className="hover:underline">
          Properties
        </a>
        <a href="#" className="hover:underline">
          Contact
        </a>
      </nav>

      {/* Contact Info and CTA */}
      <div className="flex items-center space-x-4">
        <span className="text-white">+111 333 5555</span>
        <button className="bg-lime-400 text-black px-4 py-2 rounded hover:bg-lime-500 transition">
          Explore Properties
        </button>
      </div>
    </header>
  );
};

export default Header;
