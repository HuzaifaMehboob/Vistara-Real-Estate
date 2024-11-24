import React from "react";
import uae_office from "../../../assets/uae_office.jpg";
import america_office from "../../../assets/america_office.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";

const ContactPage = () => {
  let hq_list = [
    {
      name: "United Arab Emirates HQ",
      location: "Dubai Digital Park, Dubai Silicon Oasis, Dubai, UAE",
      number: "358 042 187 8080, +358 042 187 8080",
      image: uae_office,
    },
    {
      name: "New York, USA HQ",
      location:
        "Clever Multiservice, Onderdonk Ave, Ridgewood, NY, United States",
      number: "358 042 187 8080, +358 042 187 8080",
      image: america_office,
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row md:flex-row p-4 mt-14 mb-14 gap-8 lg:justify-between lg:px-14 ">
      {/* Left Section */}
      <div className="flex flex-col gap-6 w-full lg:w-[40%]">
        {hq_list.map((ele, index) => (
          <div
            key={index}
            className="bg-white  rounded-lg overflow-hidden"
          >
            {/* Image */}
            <img
              src={ele.image}
              alt={ele.name}
              className="w-full h-64 object-cover"
            />
            {/* Content */}
            <div className="py-6 px-4 space-y-3">
              <h2 className="text-2xl font-semibold">{ele.name}</h2>
              {/* Location */}
              <div className="flex gap-2 items-center text-gray-600">
                <div className="p-2 rounded-lg bg-gray-100">
                  <FaLocationDot size={15} />
                </div>
                <span>{ele.location}</span>
              </div>
              {/* Phone Number */}
              <div className="flex gap-2 items-center text-gray-600">
                <div className="p-2 rounded-lg bg-gray-100">
                  <MdCall size={15} />
                </div>
                <span>{ele.number}</span>
              </div>
            </div>
          </div>
        ))}
        
      </div>
       {/* Right Section: Contact Form */}
       <div className="bg-white shadow-lg rounded-lg p-8 w-full lg:w-[55%]">
        <h2 className="text-5xl font-semibold mb-6">Reach out for any query</h2>
        <p className="text-gray-600 text-lg mb-10">
          Contact us today to discuss your property needs and choose the right plan. We’re here to guide you through every step of the process.
        </p>
        <form className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 mb-3">Full Name (required)</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full p-4 border border-gray-300 rounded-md focus:ring focus:ring-green-400"
              required
            />
          </div>
          {/* Email Address */}
          <div>
            <label className="block text-gray-700 mb-3">Email Address (required)</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-4 border border-gray-300 rounded-md focus:ring focus:ring-green-400"
              required
            />
          </div>
          {/* Subject */}
          <div>
            <label className="block text-gray-700 mb-3">Subject (required)</label>
            <input
              type="text"
              placeholder="Inquiry about buying, selling, renting, property management"
              className="w-full p-4 border border-gray-300 rounded-md focus:ring focus:ring-green-400"
              required
            />
          </div>
          {/* Detailed Inquiry */}
          <div>
            <label className="block text-gray-700 mb-3">Detailed inquiry</label>
            <textarea
              placeholder="Type your opinion"
              rows="6"
              className="w-full p-4 border border-gray-300 rounded-md focus:ring focus:ring-green-400"
            ></textarea>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-[30%] py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
