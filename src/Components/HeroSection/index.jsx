import React, { useState } from "react";
import SearchBar from "../Searchbar";
import hero_pic from "../../assets/hero_house_pic.jpg";
import { SiHomeassistant } from "react-icons/si";
import { IoIosSearch, IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import DropdownMenu from "../DropDownMenu";

const HeroSection = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // For desktop dropdown
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // For mobile menu
  const [isNestedDropdownOpen, setIsNestedDropdownOpen] = useState(false); // For nested dropdown in mobile

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleNestedDropdown = () => setIsNestedDropdownOpen(!isNestedDropdownOpen);

  return (
    <>
      {/* Fixed Header */}
      

      {/* Hero Section */}
      <section
        className="hero-section relative min-h-screen bg-cover bg-center text-white flex flex-col justify-center items-start"
        style={{
          backgroundImage: `url(${hero_pic})`,
        }}
      >
        <header className="absolute top-0 left-0 w-full z-20 px-5 lg:px-10 bg-transparent">
        <div className="max-w-7xl py-4 flex  justify-between items-center">
          {/* Logo and Name */}
          <div className="flex items-center space-x-3">
            <SiHomeassistant size={30} color="#CCFF00" />
            <span className="text-3xl font-medium text-white">Vistara</span>
          </div>

          {/* Navigation Links for Large Screens */}
          <div className="hidden md:flex items-center text-lg space-x-6">
            {/* Dropdown Menu */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-white transition relative border-2 border-transparent flex items-center gap-1 hover:border-white rounded-3xl px-4 py-1"
              >
                All Pages{" "}
                {isDropdownOpen ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20} />}
              </button>
              {isDropdownOpen && <DropdownMenu />}
            </div>

            <a
              href="#properties"
              className="text-white transition relative border-2 border-transparent hover:border-white rounded-3xl px-4 py-1"
            >
              Properties
            </a>
            <a
              href="#contact"
              className="text-white transition relative border-2 border-transparent hover:border-white rounded-3xl px-4 py-1"
            >
              Contact
            </a>
          </div>

          {/* Search Icon, Explore Properties Button, and Hamburger Menu */}
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-gray-300 p-2 rounded-3xl bg-gray-300 bg-opacity-30 focus:outline-none">
              <IoIosSearch size={25} />
            </button>

            <button className="hidden md:block bg-lime-400 text-gray-800 font-semibold py-2 px-4 rounded-md hover:bg-lime-300 transition">
              Explore Properties
            </button>

            <button
              className="text-white hover:text-gray-300 p-2 rounded-3xl bg-gray-300 bg-opacity-30 focus:outline-none md:hidden"
              onClick={toggleMobileMenu}
            >
              <GiHamburgerMenu size={25} />
            </button>
          </div>
        </div>

        {/* Dropdown Menu for Small Screens */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black bg-opacity-90 text-white rounded-lg shadow-lg mt-2 p-6">
            {/* "All Pages" Dropdown */}
            <div>
              <button
                onClick={toggleNestedDropdown}
                className="w-full flex justify-between items-center text-lg py-2 px-4 hover:bg-gray-700 rounded-lg"
              >
                All Pages
                {isNestedDropdownOpen ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20} />}
              </button>
              {isNestedDropdownOpen && <DropdownMenu />}
            </div>

            {/* Direct Links for Small Screens */}
            <div className="mt-4 space-y-3">
              <a href="#properties" className="block text-lg text-white hover:text-gray-300">
                Properties
              </a>
              <a href="#contact" className="block text-lg text-white hover:text-gray-300">
                Contact
              </a>
            </div>
          </div>
        )}
      </header>
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-blue-200 bg-opacity-10"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col justify-center items-start max-w-7xl pl-10 my-auto py-16">
          <h1 className="text-8xl font-semibold mb-4">
            Turning Your Real Estate<br/> Dreams into Reality
          </h1>
          <p className="text-2xl mb-6 mt-4 max-w-2xl">
            Forget clunky application forms. We offer a modern, user-friendly
            platform that makes applying for a job a breeze.
          </p>
          <button className="mt-4 py-6 px-7 flex items-center gap-2 text-xl text-white bg-green-800 font-semibold rounded-lg hover:bg-gray-100 transition">
            Explore All Properties
        </button>
        </div>
      </section>

      {/* Additional Content */}
     
    </>
  );
};

export default HeroSection;
