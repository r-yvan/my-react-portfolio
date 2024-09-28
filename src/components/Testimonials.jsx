import React from 'react';

const Testimonials = () => {
  const testimonials = [
    { name: "John Doe", comment: "Great Developer!", image: "john-image.png" },
    { name: "Mike Peter", comment: "Amazing work!", image: "mike-image.png" }
  ];

  return (
    <section className="bg-gray-900 text-white py-16 px-10">
      <h2 className="text-4xl font-bold text-center mb-8">Clients' Testimonies</h2>
      <div className="flex flex-wrap justify-center gap-12">
        {testimonials.map((testimonial, index) => (
          <div className="bg-gray-800 p-8 rounded shadow-lg w-64 text-center" key={index}>
            <img src={`./assets/${testimonial.image}`} alt={testimonial.name} className="mx-auto rounded-full w-24 h-24 mb-4" />
            <p className="text-lg font-semibold mb-2">{testimonial.name}</p>
            <p className="text-gray-400">{testimonial.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
