import React from "react";
import profile from "../assets/me.png";

const About = () => {
  return (
    <div className="flex flex-col justify-center pt-10 border-gray-500 border-opacity-20 border-b-4">
      <div className="flex justify-center z-10 mb-20">
        <h2 className="text-6xl font-bold">
          About <span className="text-green-400">Me</span>
        </h2>
      </div>
      <div className="grid grid-cols-12 grid-rows-1 gap-12">
        <div className="col-start-3 col-end-7 border-r-4 border-opacity-20 pr-20 border-gray-500 z-10">
          <h5>
            <a href="https://git.io/typing-svg">
              <img
                src="https://readme-typing-svg.herokuapp.com?font=Poppins&weight=700&size=50&duration=4000&pause=1000&color=FFFFFF&width=1000&height=100&lines=Hello+There+I'm+Rubuto+Yvan;I'+m+a+FullStack+Developer;"
                alt="Typing SVG"
              />
            </a>
          </h5>
          <h1 className="font-bold text-3xl mb-10">
            A <span className="text-green-400">Full Stack Developer</span> and{" "}
            <span className="text-green-400">Cyber Security</span> Enthusiast
          </h1>
          <p className="font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            tincidunt felis nec augue vestibulum, sit amet cursus sapien
            feugiat. Curabitur sagittis convallis nisl, vel accumsan eros
            tincidunt in. Donec sodales, metus ac varius lobortis, lacus lorem
            volutpat urna, sed viverra arcu odio in justo.
          </p>
        </div>
        <div className="col-start-7 col-end-11 row-end-1 grid grid-cols-10 grid-rows-[35px_35px_35px_35px_35px_35px_35px_35px_35px_35px_35px] z-20">
          <div className="w-72 h-72 bg-green-400 rounded-2xl row-start-1 col-start-3"></div>
          <div className="w-72 h-72 border-white border-4 rounded-2xl ml-5 mt-5"></div>
          <div className="w-80 h-80 col-start-2 row-start-2 overflow-hidden rounded-2xl z-20">
            <img className="" src={profile} alt="Rubuto Yvan" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
