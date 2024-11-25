import React, { useState } from "react";
import { useSpring, animated } from "react-spring"; // Import react-spring
import hero_pic from "../../assets/hero_house_pic.jpg";
import { SiHomeassistant } from "react-icons/si";
import { IoIosSearch, IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import DropdownMenu from "../DropDownMenu";
import { useNavigate } from "react-router-dom";

const HeroSection = ({page}) => {
  const navigate = useNavigate()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 
  const [isNestedDropdownOpen, setIsNestedDropdownOpen] = useState(false); 

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleNestedDropdown = () => setIsNestedDropdownOpen(!isNestedDropdownOpen);

  // Animation for text and button
  const heroContentAnimation = useSpring({
    from: { transform: "translateY(100px)", opacity: 0 }, // Start from below and invisible
    to: { transform: "translateY(0px)", opacity: 1 }, // End at normal position with full opacity
    config: { tension: 200, friction: 70 },
  });

  return  (
    <section
      className={`hero-section relative ${
        page === "Home" ? "min-h-screen" : page=== "Details" ? "min-h-[10vh] " : "min-h-[70vh]"
      } bg-cover bg-center text-white flex flex-col justify-center items-start`}
      style={{
        backgroundImage: `url(${hero_pic})`,
      }}
    >
      <header className="absolute top-0 left-0 w-full z-20 px-5 lg:px-10 bg-transparent">
        <div className={`max-w-7xl ${page === "Details" ? 'py-2' : 'py-4'} flex justify-between items-center`} >
          <div className="flex items-center space-x-3 cursor-pointer" onClick={()=>navigate("/")}>
            <SiHomeassistant size={30} color="#CCFF00" />
            <span className="text-3xl font-medium text-white">Vistara</span>
          </div>
          <div className="hidden md:flex items-center text-lg space-x-6">
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
              href="/properties"
              className="text-white transition relative border-2 border-transparent hover:border-white rounded-3xl px-4 py-1"
            >
              Properties
            </a>
            <a
              href="/contact"
              className="text-white transition relative border-2 border-transparent hover:border-white rounded-3xl px-4 py-1"
            >
              Contact
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-gray-300 p-2 rounded-3xl bg-gray-300 bg-opacity-30 focus:outline-none">
              <IoIosSearch size={25} />
            </button>
            <button className="hidden md:block bg-lime-400 text-gray-800 font-semibold py-2 px-4 rounded-md hover:bg-lime-300 transition"
            onClick={()=>navigate('/properties')}>
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
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black bg-opacity-90 text-white rounded-lg shadow-lg mt-2 p-6">
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
            <div className="mt-4 space-y-3">
              <a href="/properties" className="block text-lg text-white hover:text-gray-300">
                Properties
              </a>
              <a href="/contact" className="block text-lg text-white hover:text-gray-300">
                Contact
              </a>
            </div>
          </div>
        )}
      </header>
      <div className="absolute inset-0 bg-blue-200 bg-opacity-10"></div>
      {/* Apply animation to Hero Content */}
      {page === "Home" ?
      <animated.div style={heroContentAnimation} className="relative z-10 text-left xs:text-center xs:items-center flex flex-col justify-center items-start max-w-7xl pl-10 my-auto py-16 xs:pl-0">
        <h1 className="text-9xl lg:text-7xl md:text-6xl sm:text-5xl xs:text-4xl font-semibold mb-4">
          Turning Your Real Estate<br /> Dreams into Reality
        </h1>
        <p className="text-2xl lg:text-2xl md:text-lg sm:text-lg xs:text-lg mb-6 mt-4 max-w-2xl">
          Forget clunky application forms. We offer a modern, user-friendly
          platform that makes applying for a job a breeze.
        </p>
        <button className="mt-4 py-6 px-7 lg:px-6 lg:py-4 xs:px-4 xs:text-sm xs:py-3 md:py-4 md:px-5 sm:px-5 sm:py-4 flex items-center gap-2 text-xl text-white bg-green-800 font-semibold rounded-lg hover:bg-green-900  transition">
          Explore All Properties
        </button>
      </animated.div>
      :
       page === "Properties" ?
      <animated.div style={heroContentAnimation} className="relative z-10 text-center max-w-7xl  m-auto">
        <h1 className="text-9xl lg:text-7xl md:text-6xl sm:text-5xl xs:text-4xl font-semibold mb-4">
          Properties
        </h1>
        
      </animated.div>
      :
      page === "Contact" ?
      <animated.div style={heroContentAnimation} className="relative z-10 text-center max-w-7xl  m-auto">
        <h1 className="text-9xl lg:text-7xl md:text-6xl sm:text-5xl xs:text-4xl font-semibold mb-4">
          Contact Us
        </h1>
      </animated.div>
      :
      <animated.div style={heroContentAnimation} className="relative z-10 text-center max-w-7xl  m-auto">
        
      </animated.div>

}
    </section>

  );
};

export default HeroSection;
