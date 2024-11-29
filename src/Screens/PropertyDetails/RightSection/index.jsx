import React from 'react';

import { MdCall, MdOutlineMail } from "react-icons/md";
import person2 from '../../../assets/person2.jpg';
import person1 from '../../../assets/person1.jpg';
import { IoBedOutline } from "react-icons/io5";
import { SlSizeFullscreen } from "react-icons/sl";
import { LuBath } from "react-icons/lu";
import MapSection from '../MapSection';
import { FaLocationDot } from 'react-icons/fa6';
import HomePageExtras from '../Extras';
import UsefulLinks from '../Extras';
import BlogsSection from '../Blogs';

const RightSection = () => {
  const features = [
    {
      icon: <IoBedOutline size={20} />,
      name: "3 Beds",
    },
    {
      icon: <LuBath size={20} />,
      name: '3 Baths',
    },
    {
      icon: <SlSizeFullscreen size={20} />,
      name: '1375 Sqft',
    },
  ];

  return (
    <>
      <div className="mx-2 ">
        {/* Sale Status */}
        <div className="flex gap-2 py-1 items-center hidden lg:block md:flex lg:flex">
          <div className="w-[8px] h-[8px] rounded-2xl bg-green-400 lg:block hidden"></div>
          <h2 className="text-green-400 font-semibold lg:block hidden">For Sale</h2>
        </div>

        {/* Price */}
        <h2 className="text-5xl font-bold hidden lg:block">$500,000</h2>

        {/* Property Title */}
        <div className="flex gap-2 items-center text-gray-600 text-sm my-2 hidden lg:block">
          <p className="text-md">PH305 Plan in 173 Maverick by the Elevated Companies</p>
        </div>
      </div>

      {/* Property Agents Section */}
      <div className="py-4 px-4 w-full shadow-xl rounded-2xl mt-2 bg-white border-2 border-gray-300">
        <h1 className="text-2xl font-bold mb-6">Property Agents</h1>

        {/* Agent Info */}
        <div className="flex items-center gap-4 mb-6">
          <div className="h-14 w-14 rounded-full overflow-hidden">
            <img
              src={person2}
              alt="Agent"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-lg font-semibold">Amr ibn al-Jamuh</h1>
            <p className="text-sm text-gray-500">RT Edgar - Boroondra</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-4">
          {/* Name Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
              Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
              Email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Phone Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="phone">
              Phone*
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-500 bg-gray-100 border border-gray-300 rounded-l-md">
                +92
              </span>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="flex-1 block w-full rounded-r-md border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                placeholder="Enter your phone number"
                required
              />
            </div>
          </div>

          {/* Message Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">
              Message*
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              placeholder="Type your message here"
              required
            >
I would like to inquire about your property Vistara - ID49804206. Please contact me at your earliest convenience.
            </textarea>
          </div>

          {/* Radio Buttons */}
          <div className="flex items-center space-x-6">
            <label className="flex items-center">
              <input
                type="radio"
                name="role"
                value="buyer"
                className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                defaultChecked
              />
              <span className="ml-2 text-sm text-gray-700">Buyer/Tenant</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="role"
                value="agent"
                className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
              />
              <span className="ml-2 text-sm text-gray-700">Agent</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="role"
                value="other"
                className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
              />
              <span className="ml-2 text-sm text-gray-700">Other</span>
            </label>
          </div>

          {/* Checkbox */}
          <div className="flex items-center">
            <input
              id="keep-informed"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label htmlFor="keep-informed" className="ml-2 text-sm text-gray-700">
              Keep me informed about similar properties.
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Send Email
          </button>
        </form>
      </div>

      {/* Additional Sections */}
      <UsefulLinks />
      <BlogsSection />
    </>
  );
};

export default RightSection;
