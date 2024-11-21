import React from 'react';
import person1 from '../../assets/person1.jpg'
import person2 from '../../assets/person2.jpg'
import person3 from '../../assets/person3.jpg'
const testimonials = [
  {
    image: person1,
    name: 'Michael Thompson',
    title: 'Software Engineer',
    feedback:
      'Top-notch real estate service, always available with expert guidance. Highly professional.Their support was invaluable throughout my buying experience.',
  },
  {
    image: person2,
    name: 'Daniel Martinez',
    title: 'Product Designer',
    feedback:
      'Dedicated real estate experts, always ready to help. Their support was invaluable throughout.Their support was invaluable throughout my buying experience.',
  },
  {
    image: person3,
    name: 'Michael Smith',
    title: 'Medical Officer',
    feedback:
      'Fantastic real estate experience. The team was professional, responsive, and genuinely.Their support was invaluable throughout my buying experience.',
  },
];

const Testimonials = () => {
  return (
    <section className="bg-green-100 py-12 my-14 px-4">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold">
          Clients speak volumes <span className="text-green-700">about us</span>
        </h2>
        <p className="text-gray-500 mt-2">
          Listen to the stories of our satisfied clients, sharing their experiences and successes with our exceptional real estate services.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white flex flex-col justify-between p-6 rounded-lg shadow-lg ">
            <div className="mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full border-4 object-cover border-green-500"
              />
            </div>
            <p className="text-gray-700 mb-4">{testimonial.feedback}</p>
            <h4 className="font-semibold text-lg">{testimonial.name}</h4>
            <p className="text-gray-500">{testimonial.title}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <div className="flex space-x-2">
          <span className="w-3 h-3 bg-green-800 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
