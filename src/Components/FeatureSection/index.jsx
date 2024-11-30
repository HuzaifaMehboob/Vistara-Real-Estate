import React from "react";
import { FaShieldAlt, FaTag, FaPercent, FaEye } from "react-icons/fa";

const FeaturesSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title and Description */}
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Find Your Dream Home Easily
          </h1>
          <p className="text-lg text-gray-600">
            Explore thousands of listings with our curated features for a seamless experience.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition">
            <div className="text-green-600 mb-4">
              <FaShieldAlt size={40} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Property Insurance</h3>
            <p className="text-gray-600">
              Comprehensive property protection to ensure peace of mind.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition">
            <div className="text-green-600 mb-4">
              <FaTag size={40} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Best Price</h3>
            <p className="text-gray-600">
              Transparent pricing and expert guidance for your property.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition">
            <div className="text-green-600 mb-4">
              <FaPercent size={40} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Lowest Commission</h3>
            <p className="text-gray-600">
              Affordable commissions at just 2% for all transactions.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition">
            <div className="text-green-600 mb-4">
              <FaEye size={40} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Overall Control</h3>
            <p className="text-gray-600">
              Schedule virtual tours and manage your listings effortlessly.
            </p>
          </div>
        </div>

        {/* Call-to-Action */}
        {/* <div className="mt-12">
          <button className="px-8 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-lg hover:bg-indigo-500 transition">
            Browse Properties
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default FeaturesSection;
