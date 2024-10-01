import React from "react";
import background from "../assets/background.png";
import profile from "../assets/me.png";

const About = () => {
  return (
    <section
      className="relative bg-gray-800 text-white py-16 px-10 font-body bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>{" "}
      <h2 className="relative text-4xl font-bold text-center mb-8 z-10">
        About <span className="text-green-400">Me</span>
      </h2>
      <div className="mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-5 grid-rows-1 gap-10 mt-24 items-center">
        <div className="col-start-3 col-span-2 text-center md:text-left md:ml-12">
            <h5 className="text-2xl md:text-4xl font-bold">
              <a href="https://git.io/typing-svg">
                <img
                  src="https://readme-typing-svg.herokuapp.com?font=Poppins&weight=700&size=60&duration=4000&pause=1000&color=FFFFFF&width=1000&height=100&lines=Hello+There+I'm+Rubuto+Yvan;I'+m+a+FullStack+Developer"
                  alt="Typing SVG"
                />
              </a>
            </h5>
            <h1 className="w-full py-6 text-5xl text-green-400 font-bold">
              Full Stack Developer
            </h1>
            <p className="text-gray-300 mt-4 text-md font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              tincidunt felis nec augue vestibulum, sit amet cursus sapien
              feugiat. Curabitur sagittis convallis nisl, vel accumsan eros
              tincidunt in. Donec sodales, metus ac varius lobortis, lacus lorem
              volutpat urna, sed viverra arcu odio in justo.
            </p>
          </div>
          <div className="bg-green-500 w-80 h-80 rounded-2xl -z-20 absolute left-80 top-36 rotate-90"></div>
          <div className="border-4 border-white w-80 h-80 rounded-2xl absolute left-72 top-40 -z-10"></div>
          <div className="col-end-3 w-80 h-80 rounded-2xl overflow-hidden mb-6 md:mb-0 md:mr-12 shadow-2xl">
            <img
              src={profile}
              alt="Rubuto Yvan"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
