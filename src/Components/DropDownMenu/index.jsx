import React from "react";

const DropdownMenu = () => {
  return (
    <div className="relative">
      <div
        className="absolute bg-black bg-opacity-90 text-white rounded-lg shadow-lg mt-2 p-6 grid grid-cols-2 lg:grid-cols-4 gap-4 z-50 w-[400px] lg:w-[600px]"
      >
        <div>
          <h4 className="text-xl font-semibold mb-5">Main</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#home">Home</a></li>
            <li><a href="#company">Company</a></li>
            <li><a href="#property-listing">Property Listing (CMS)</a></li>
            <li><a href="#property-details">Property Details (CMS)</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-5">Agent</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#agent-listing">Agent Listing (CMS)</a></li>
            <li><a href="#agent-details">Agent Details (CMS)</a></li>
            <li><a href="#services">Services (CMS)</a></li>
            <li><a href="#services-details">Services Details (CMS)</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-5">Blogs</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#blog">Blog (CMS)</a></li>
            <li><a href="#blog-details">Blog Details (CMS)</a></li>
            <li><a href="#shop">Shop (CMS)</a></li>
            <li><a href="#shop-details">Shop Details (CMS)</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-5">Others</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#contact">Contact</a></li>
            <li><a href="#testimonial">Testimonial</a></li>
            <li><a href="#how-it-works">How it Works</a></li>
            <li><a href="#404">404</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
