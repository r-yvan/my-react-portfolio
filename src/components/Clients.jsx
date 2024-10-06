import React from "react";
import profile from "../assets/me.png";

const Clients = () => {
  const testimonials = [
    { name: "John Doe", comment: "Great Developer!", image: "john-image.png" },
    { name: "Mike Peter", comment: "Amazing work!", image: "mike-image.png" },
  ];

  return (
    <div className="bg-custom text-white">
      <div className="flex justify-center pt-10 z-20">
        <h2 className="text-4xl font-bold mb-20 z-20">
          <span className="text-green-400">Clients'</span> Testimonies
        </h2>
      </div>
      <div className="flex justify-center gap-20">
        {testimonials.map((testimonial, index) => (
          <div
            className="flex flex-row rounded-2xl border-2 border-green-400 border-opacity-0 duration-200 ease-out hover:border-opacity-100 bg-white bg-opacity-10 backdrop-blur-3xl pl-4 pt-4 shadow-lg w-96"
            key={index}
          >
            <div className="grid grid-cols-[15px_15px_15px_15px_15px_15px_15px_15px_15px_15px] grid-rows-[15px_15px_15px_15px_15px_15px_15px_15px_15px_15px]">
              <div className="w-28 h-28 bg-green-400 rounded-xl row-start-1 col-start-1"></div>
              <div className="w-28 h-28 border-white border-4 rounded-2xl mt-2"></div>
              <div className="w-28 h-28 col-start-3 row-start-2 overflow-hidden rounded-2xl z-20">
                <img className="" src={profile} alt="Rubuto Yvan" />
              </div>
            </div>
            <div className="ml-5">
              <p className="text-lg font-semibold text-green-400 mb-3">
                {testimonial.name}
              </p>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
