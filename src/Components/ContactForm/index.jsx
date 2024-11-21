import React from "react";

const ContactForm = () => {
  return (
    <section className="bg-[#022C22] text-white py-12 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Let’s Find Your Perfect Property</h2>
        <p className="text-gray-300 mb-8">
          Have questions or ready to take the next step? Whether you're buying, selling, or just exploring options.
        </p>

        {/* Contact Information */}
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-4 md:space-y-0 mb-8">
          <div>
            <p className="font-medium text-gray-400 text-sm">Email Address</p>
            <p className="text-gray-100">support@homequest.com</p>
          </div>
          <div>
            <p className="font-medium text-gray-400 text-sm">Phone Call</p>
            <p className="text-gray-100">+021 801920, +982 771882</p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg text-left p-6 text-black max-w-2xl mx-auto">
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Left Column */}
            <div>
              <label className="block text-gray-600 text-sm mb-1" htmlFor="name">
                Your name
              </label>
              <input
                id="name"
                type="text"
                placeholder="First and last name"
                className="w-full px-4 py-2 border rounded-md text-gray-800 focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm mb-1" htmlFor="request">
                What do you want?
              </label>
              <select
                id="request"
                className="w-full px-4 py-2 border rounded-md text-gray-800 focus:ring-2 focus:ring-green-500"
              >
                <option>Buy a house</option>
                <option>Sell a property</option>
                <option>Explore options</option>
              </select>
            </div>

            {/* Middle Column */}
            <div>
              <label className="block text-gray-600 text-sm mb-1" htmlFor="location">
                Your preferred location
              </label>
              <select
                id="location"
                className="w-full px-4 py-2 border rounded-md text-gray-800 focus:ring-2 focus:ring-green-500"
              >
                <option>New York</option>
                <option>California</option>
                <option>Florida</option>
                <option>Texas</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-600 text-sm mb-1" htmlFor="budget">
                Your desired budget
              </label>
              <input
                id="budget"
                type="text"
                placeholder="$900,000"
                className="w-full px-4 py-2 border rounded-md text-gray-800 focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Bottom Column */}
            <div>
              <label className="block text-gray-600 text-sm mb-1" htmlFor="email">
                Your email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="yourmail@homequest.com"
                className="w-full px-4 py-2 border rounded-md text-gray-800 focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm mb-1" htmlFor="phone">
                Your phone number
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+021 9029 9202"
                className="w-full px-4 py-2 border rounded-md text-gray-800 focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Button */}
            <div className="col-span-1 sm:col-span-2">
              <button
                type="submit"
                className="w-full px-4 py-3 bg-[#CCFF00] text-black font-bold rounded-md hover:bg-[#bbf500] transition"
              >
                Get a Quote
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
