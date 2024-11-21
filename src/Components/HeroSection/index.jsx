import React from "react";
import SearchBar from "../Searchbar";
import hero_pic from "../../assets/hero_house_pic.jpg";  // Ensure the image path is correct

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center text-white flex flex-col justify-center items-start"
      style={{
        backgroundImage: `url(${hero_pic})`, // Set the background image here
      }}
    >
      {/* Header inside Hero Section */}
      <header className="absolute top-0 left-0 w-full bg-transparent py-4 px-4 flex justify-between items-center z-20">
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
      </header>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-start max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">
          Turning Your Real Estate Dreams into Reality
        </h1>
        <p className="text-lg mb-6 max-w-2xl">
          Forget clunky application forms. We offer a modern, user-friendly
          platform that makes applying for a job a breeze.
        </p>
        <SearchBar />
      </div>
    </section>
  );
};

export default HeroSection;
