import React from "react";
import background from "../assets/background.png";
import profile from "../assets/me.png";

const About = () => {
  return (
    <section
      className="relative bg-gray-950 text-white py-16 px-10 font-body bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${background})` }}
    >
      <img src={background} alt="background" />
      <h2>
        About <span>Me</span>
      </h2>
      <div>
        <div className="grid grid-cols-7 grid-rows-1">
          <div className="col-start-3 col-end-5">
            <h5>
              <a href="https://git.io/typing-svg">
                <img
                  src="https://readme-typing-svg.herokuapp.com?font=Poppins&weight=700&size=60&duration=4000&pause=1000&color=FFFFFF&width=1000&height=100&lines=Hello+There+I'm+Rubuto+Yvan;I'+m+a+FullStack+Developer"
                  alt="Typing SVG"
                />
              </a>
            </h5>
            <h1>Full Stack Developer</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              tincidunt felis nec augue vestibulum, sit amet cursus sapien
              feugiat. Curabitur sagittis convallis nisl, vel accumsan eros
              tincidunt in. Donec sodales, metus ac varius lobortis, lacus lorem
              volutpat urna, sed viverra arcu odio in justo.
            </p>
          </div>
          <div className="col-start-5 col-end-7">
            <div className="absolute bg-green-400 w-80 h-80 right-80"></div>
            <div className=""></div>
            <div className="w-80 h-80 overflow-hidden rounded-2xl">
              <img className="z-10" src={profile} alt="Rubuto Yvan" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
