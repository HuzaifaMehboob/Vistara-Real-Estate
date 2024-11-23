import React from 'react';
import { SiHomeassistant } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="w-full border-t-4 mt-14 border-green-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
          {/* Center-aligned logo and text */}
          <div className="col-span-full lg:col-span-2 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start items-center space-x-3">
              <SiHomeassistant size={30} color="#CCFF00" />
              <span className="text-3xl font-medium text-black">Vistara</span>
            </div>
            <p className="py-8 text-sm text-gray-500 lg:max-w-xs mx-auto lg:mx-0">
              Trusted in more than 100 countries & 5 million customers. Have any query?
            </p>
            <a
              href="javascript:;"
              className="py-2.5 px-5 h-9 block w-fit bg-green-800 rounded-full shadow-sm text-xs text-white mx-auto transition-all duration-500 hover:bg-indigo-700 lg:mx-0"
            >
              Contact us
            </a>
          </div>

          {/* Links Sections */}
          <div className="lg:mx-auto text-center lg:text-left">
            <h4 className="text-lg text-gray-900 font-medium mb-7">Vistara</h4>
            <ul className="text-sm transition-all duration-500">
              <li className="mb-6"><a href="javascript:;" className="text-gray-600 hover:text-gray-900">Home</a></li>
              <li className="mb-6"><a href="javascript:;" className="text-gray-600 hover:text-gray-900">About</a></li>
              <li className="mb-6"><a href="javascript:;" className="text-gray-600 hover:text-gray-900">Pricing</a></li>
              <li><a href="javascript:;" className="text-gray-600 hover:text-gray-900">Features</a></li>
            </ul>
          </div>

          <div className="lg:mx-auto text-center lg:text-left">
            <h4 className="text-lg text-gray-900 font-medium mb-7">Products</h4>
            <ul className="text-sm transition-all duration-500">
              <li className="mb-6"><a href="javascript:;" className="text-gray-600 hover:text-gray-900">Figma UI System</a></li>
              <li className="mb-6"><a href="javascript:;" className="text-gray-600 hover:text-gray-900">Icons Assets</a></li>
              <li className="mb-6"><a href="javascript:;" className="text-gray-600 hover:text-gray-900">Responsive Blocks</a></li>
              <li><a href="javascript:;" className="text-gray-600 hover:text-gray-900">Components Library</a></li>
            </ul>
          </div>

          <div className="lg:mx-auto text-center lg:text-left">
            <h4 className="text-lg text-gray-900 font-medium mb-7">Resources</h4>
            <ul className="text-sm transition-all duration-500">
              <li className="mb-6"><a href="javascript:;" className="text-gray-600 hover:text-gray-900">FAQs</a></li>
              <li className="mb-6"><a href="javascript:;" className="text-gray-600 hover:text-gray-900">Quick Start</a></li>
              <li className="mb-6"><a href="javascript:;" className="text-gray-600 hover:text-gray-900">Documentation</a></li>
              <li><a href="javascript:;" className="text-gray-600 hover:text-gray-900">User Guide</a></li>
            </ul>
          </div>

          <div className="lg:mx-auto text-center lg:text-left">
            <h4 className="text-lg text-gray-900 font-medium mb-7">Blogs</h4>
            <ul className="text-sm transition-all duration-500">
              <li className="mb-6"><a href="javascript:;" className="text-gray-600 hover:text-gray-900">News</a></li>
              <li className="mb-6"><a href="javascript:;" className="text-gray-600 hover:text-gray-900">Tips & Tricks</a></li>
              <li className="mb-6"><a href="javascript:;" className="text-gray-600 hover:text-gray-900">New Updates</a></li>
              <li><a href="javascript:;" className="text-gray-600 hover:text-gray-900">Events</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-7 border-t border-gray-200">
          <div className="flex flex-col items-center lg:flex-row lg:justify-between">
            <span className="text-sm text-gray-500">
              © <a href="https://pagedone.io/">Vistara</a> 2024, All rights reserved.
            </span>
            <div className="flex mt-4 space-x-4 lg:mt-0">
              {/* Social Icons */}
              <a href="javascript:;" className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-green-600">
                {/* Add SVG Icons Here */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
