import React from "react";
import background from "../assets/circle-scatter-haikei2.png";
import profile from "../assets/me.png";
import netflixLogo from "../assets/netflix.png";
import googleLogo from "../assets/google.png";
import paypalLogo from "../assets/paypal.png";
import skypeLogo from "../assets/skype.png";
import amazonLogo from "../assets/amazon.png";
import achievement from "../assets/achievement.png";
import temp from "../assets/temp.jpg";
import Skills from "./Skills";

const Header = () => {
  const skills = [
    {
      category: "Frontend",
      list: [
        "React JS",
        "Vue JS",
        "Angular JS",
        "Tailwind CSS",
        "Bootstrap CSS",
        "React Native",
      ],
    },
    {
      category: "Backend",
      list: ["Node JS", "Django", "Spring Boot", "MongoDB", "PHP"],
    },
    { category: "Others", list: ["Figma", "Photoshop", "Illustrator"] },
  ];

  const projects = [
    {
      title: "React Native Project",
      description: "Lorem ipsum dolor sit amet...",
    },
    {
      title: "React Native Project",
      description: "Lorem ipsum dolor sit amet...",
    },
    {
      title: "React Native Project",
      description: "Lorem ipsum dolor sit amet...",
    },
  ];

  const testimonials = [
    { name: "John Doe", comment: "Great Developer!", image: "john-image.png" },
    { name: "Mike Peter", comment: "Amazing work!", image: "mike-image.png" },
  ];

  return (
    <header
      className="bg-custom text-white font-body relative overflow-hidden pb-36"
      style={{ minHeight: "100vh" }}
    >
      <img
        src={background}
        alt="background"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-60 blur-3xl z-0"
      />
      <nav className="absolute top-0 left-0 right-0 p-5 z-10 falling-text">
        <ul className="flex justify-center items-center space-x-6 text-lg">
          <li className="font-light duration-200 ease-out hover:text-green-400">
            Home
          </li>
          <li className="font-light duration-200 ease-out hover:text-green-400">
            About Me
          </li>
          <li className="font-light duration-200 ease-out hover:text-green-400">
            Education
          </li>
          <li className="font-light duration-200 ease-out hover:text-green-400">
            Skills
          </li>
          <li>
            <p className="font-light hover:text-green-400" href="">
              Projects
            </p>
          </li>
        </ul>
      </nav>
      <div className="border-b-4 border-gray-500 pb-20 ">
        <div className="flex flex-col relative px-4 py-20 z-10">
          <div className="flex flex-row justify-center gap-10 mt-24 falling-text">
            <div className="w-96 h-96"></div>
            <div className="w-96 h-96"></div>
            <div className="w-96 h-96"></div>
            <div className="grid grid-cols-[35px_35px_35px_35px_35px_35px_35px_35px_35px_35px_35px] grid-rows-[35px_35px_35px_35px_35px_35px_35px_35px_35px_35px_35px] z-20">
              <div className="w-72 h-72 bg-green-400 rounded-2xl row-start-1 col-start-3"></div>
              <div className="w-72 h-72 border-white border-4 rounded-2xl ml-5 mt-5"></div>
              <div className="w-72 h-72 col-start-2 row-start-2 overflow-hidden rounded-2xl z-20">
                <img className="" src={profile} alt="Rubuto Yvan" />
              </div>
            </div>
            <div className="">
              <h5 className="text-2xl font-bold">
                <a href="https://git.io/typing-svg">
                  <img
                    src="https://readme-typing-svg.herokuapp.com?font=Poppins&weight=700&size=40&duration=4000&pause=1000&color=FFFFFF&width=1000&height=100&lines=Hello+There+I'm+Rubuto+Yvan;I'+m+a+FullStack+Developer"
                    alt="Typing SVG"
                  />
                </a>
              </h5>
              <h1 className="w-full py-6 text-5xl text-green-400 font-bold">
                Full Stack Developer
              </h1>
              <p className="text-gray-300 mt-4 text-md font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas tincidunt felis nec augue vestibulum, sit amet cursus
                sapien feugiat. Curabitur sagittis convallis nisl, vel accumsan
                eros tincidunt in. Donec sodales, metus ac varius lobortis,
                lacus lorem volutpat urna, sed viverra arcu odio in justo.
              </p>
            </div>
            <div className="w-96 h-96"></div>
            <div className="w-96 h-96"></div>
            <div className="w-96 h-96"></div>
          </div>
          <div className="flex justify-center items-center flex-wrap gap-8 mt-12 falling-text">
            <img src={netflixLogo} alt="Netflix" className="h-8" />
            <img src={googleLogo} alt="Google" className="h-8" />
            <img src={paypalLogo} alt="PayPal" className="h-8" />
            <img src={skypeLogo} alt="Skype" className="h-8" />
            <img src={amazonLogo} alt="Amazon" className="h-8" />
          </div>
        </div>
        <div className="grid grid-cols-7 grid-rows-1 gap-8 falling-text">
          <div className="flex justify-center items-center flex-col col-start-3 col-end-4 border-2 border-gray-400 px-4 py-4 bg-white bg-opacity-15 backdrop-filter backdrop-blur-3xl rounded-2xl">
            <h1 className="text-7xl items-center text-green-400">1+</h1>
            <p className="opacity-70 font-light pt-3">Years</p>
            <p>Experience</p>
          </div>
          <div className="flex justify-center flex-col items-center col-start-4 col-end-5 border-2 px-10 py-10 bg-white bg-opacity-15 backdrop-filter backdrop-blur-3xl rounded-2xl border-1 border-gray-400">
            <h1 className="text-7xl items-center text-green-400">21+</h1>
            <p className="opacity-70 font-light pt-3">Github</p>
            <p className="font-bold">Repositories</p>
          </div>
          <div className="flex justify-center flex-col items-center col-start-5 col-end-6 border-2 border-gray-400 px-4 py-4 bg-white bg-opacity-15 backdrop-filter backdrop-blur-3xl rounded-2xl">
            <h1 className="text-7xl text-green-400">11+</h1>
            <p className="opacity-70 font-light pt-3">Friendly</p>
            <p className="font-bold">Connections</p>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <button className="px-36 py-3 rounded-full bg-green-400 z-10 font-bold">
            Connect
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
