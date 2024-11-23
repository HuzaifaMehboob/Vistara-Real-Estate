import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How long does it take to buy or sell a property?",
      answer:
        "The time it takes to buy or sell a property depends on several factors, including market conditions, property type, and the buyer/seller’s readiness. On average, it takes 1 to 3 months from listing a property to closing a sale.",
    },
    {
      question: "What fees are involved in buying or selling a home?",
      answer:
        "Fees may include agent commissions, closing costs, inspection fees, and taxes. Specific fees vary based on the transaction.",
    },
    {
      question: "How is the value of my home determined?",
      answer:
        "Home value is determined by factors such as location, size, condition, comparable sales, and current market trends.",
    },
    {
      question: "Can I get assistance with financing a property purchase?",
      answer:
        "Yes, we can connect you with trusted financial advisors and lenders to help secure financing for your purchase.",
    },
    {
      question: "What are the benefits of hiring a property management service?",
      answer:
        "Property management services handle tasks such as tenant screening, rent collection, and maintenance, saving you time and ensuring your investment is well cared for.",
    },
  ];

  return (
    <section className=" py-28 bg-gray-100 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">
          Hear from Our Happy Homeowners
        </h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left px-6 py-4 bg-gray-100 hover:bg-gray-200 flex justify-between items-center text-gray-800 font-medium"
              >
                {item.question}
                <span>
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-6 py-4 bg-white text-gray-600">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
