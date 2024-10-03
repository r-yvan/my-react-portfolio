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
      className="bg-black text-white font-body relative overflow-hidden pb-36"
      style={{ minHeight: "100vh" }}
    >
      <nav className="absolute top-0 left-0 right-0 p-5 z-10">
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
          <li className="font-light duration-200 ease-out hover:text-green-400">
            Projects
          </li>
        </ul>
      </nav>
      <img
        src={background}
        alt="background"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-60 blur-3xl z-0"
      />
      <div className="border-b-4 border-gray-500 pb-20">
        <div className="mx-auto px-4 py-20 relative z-10">
          <div className="grid grid-cols-5 grid-rows-1 gap-32 mt-24 items-center">
            <div className="col-start-2 col-end-3 grid grid-cols-10 grid-rows-[35px_35px_35px_35px_35px_35px_35px_35px_35px_35px_35px] z-20">
              <div className="w-72 h-72 bg-green-400 rounded-2xl row-start-1 col-start-3"></div>
              <div className="w-72 h-72 border-white border-4 rounded-2xl ml-5 mt-5"></div>
              <div className="w-80 h-80 col-start-2 row-start-2 overflow-hidden rounded-2xl z-20">
                <img className="" src={profile} alt="Rubuto Yvan" />
              </div>
            </div>
            <div className="col-start-3 col-span-3 text-center md:text-left md:ml-12">
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas tincidunt felis nec augue vestibulum, sit amet cursus
                sapien feugiat. Curabitur sagittis convallis nisl, vel accumsan
                eros tincidunt in. Donec sodales, metus ac varius lobortis,
                lacus lorem volutpat urna, sed viverra arcu odio in justo.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center flex-wrap gap-8 mt-12">
            <img src={netflixLogo} alt="Netflix" className="h-8" />
            <img src={googleLogo} alt="Google" className="h-8" />
            <img src={paypalLogo} alt="PayPal" className="h-8" />
            <img src={skypeLogo} alt="Skype" className="h-8" />
            <img src={amazonLogo} alt="Amazon" className="h-8" />
          </div>
        </div>
        <div className="grid grid-cols-7 grid-rows-1 gap-8">
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
      <div className="flex flex-col justify-center pt-10 pb-24">
        <div className="flex justify-center z-10 mb-20">
          <h2 className="text-6xl font-bold">
            My <span className="text-green-400">Education</span>
          </h2>{" "}
        </div>
        <div className="grid grid-cols-[200px_440px_440px_440px_200px] grid-rows-2 gap-x-5 gap-y-5 z-10">
          <div className="col-start-2 row-end-2 flex flex-row items-center p-8 duration-200 border-2 border-green-400 border-opacity-0 hover:border-opacity-100 ease-out hover:bg-white hover:bg-opacity-10 hover:backdrop-blur-lg rounded-2xl">
            <div>
              <img src={achievement} alt="" />
            </div>
            <div className="ml-8 flex flex-col justify-center items-center">
              <p className="text-green-400 font-bold text-lg">
                MERN Stack Web Dev
              </p>
              <p>Rwanda Coding Academy</p>
              <p>2024 - 2025</p>
            </div>
          </div>
          <div className="col-start-3 col-end-4 row-end-2 flex flex-row items-center p-8 duration-200 border-2 border-green-400 border-opacity-0 hover:border-opacity-100 ease-out hover:bg-white hover:bg-opacity-10 hover:backdrop-blur-lg rounded-2xl">
            <div>
              <img src={achievement} alt="" />
            </div>
            <div className="ml-8 flex flex-col justify-center items-center">
              <p className="text-green-400 font-bold text-lg">
                Full Stack Web Dev
              </p>
              <p>Rwanda Coding Academy</p>
              <p>2024 - 2025</p>
            </div>
          </div>
          <div className="col-start-4 col-end-5 row-end-2 flex flex-row items-center p-8 duration-200 border-2 border-green-400 border-opacity-0 hover:border-opacity-100 ease-out hover:bg-white hover:bg-opacity-10 hover:backdrop-blur-lg rounded-2xl">
            <div>
              <img src={achievement} alt="" />
            </div>
            <div className="ml-8 flex flex-col justify-center items-center">
              <p className="text-green-400 font-bold text-lg">
                Software Engineering
              </p>
              <p>Rwanda Coding Academy</p>
              <p>2024 - 2025</p>
            </div>
          </div>
          <div className="col-start-2 col-end-3 flex flex-row items-center p-8 duration-200 border-2 border-green-400 border-opacity-0 hover:border-opacity-100 ease-out hover:bg-white hover:bg-opacity-10 hover:backdrop-blur-lg rounded-2xl">
            <div>
              <img src={achievement} alt="" />
            </div>
            <div className="ml-8 flex flex-col justify-center items-center">
              <p className="text-green-400 font-bold text-lg">Blockchain Dev</p>
              <p>Rwanda Coding Academy</p>
              <p>2024 - 2025</p>
            </div>
          </div>
          <div className="col-start-3 col-end-4 flex flex-row items-center p-8 duration-200 border-2 border-green-400 border-opacity-0 hover:border-opacity-100 ease-out hover:bg-white hover:bg-opacity-10 hover:backdrop-blur-lg rounded-2xl">
            <div>
              <img src={achievement} alt="" />
            </div>
            <div className="ml-8 flex flex-col justify-center items-center">
              <p className="text-green-400 font-bold text-lg">Graphic Design</p>
              <p>Rwanda Coding Academy</p>
              <p>2024 - 2025</p>
            </div>
          </div>
          <div className="col-start-4 col-end-5 flex flex-row items-center p-8 duration-200 border-2 border-green-400 border-opacity-0 hover:border-opacity-100 ease-out hover:bg-white hover:bg-opacity-10 hover:backdrop-blur-lg rounded-2xl">
            <div>
              <img src={achievement} alt="" />
            </div>
            <div className="ml-8 flex flex-col items-center">
              <p className="text-green-400 font-bold text-lg">
                Blockchain Development
              </p>
              <p>Rwanda Coding Academy</p>
              <p>2024 - 2025</p>
            </div>
          </div>
        </div>
      </div>
      <Skills />
      <div className="border-b-4 pb-10 pt-10 border-gray-500 border-opacity-50 z-30">
        <div className="flex justify-center z-20">
          <h2 className="text-4xl font-bold mb-20 z-20">
            My <span className="text-green-400">Projects</span>
          </h2>
        </div>
        <div className="flex flex-row justify-center gap-10 start-2 z-20">
          {projects.map((project, index) => (
            <div
              className="flex flex-col basis-80 bg-white bg-opacity-10 backdrop-blur-3xl border-2 border-white border-opacity-10 duration-200 ease-out hover:scale-95 hover:drop-shadow-2xl hover:shadow-green-400 hover:shadow-2xl hover:border-green-400 hover:border-opacity-100 rounded-2xl p-3 shadow-md z-20"
              key={index}
            >
              <div className="w-72 rounded-xl overflow-hidden mb-4">
                <img src={temp} alt="" />
              </div>
              <div className="flex flex-col pl-3 border-l-4 border-green-400">
                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-400">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-4xl font-bold text-center mb-8">
          <span className="text-green-400">Clients'</span> Testimonies
        </h2>
        <div className="flex flex-wrap justify-center gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              className="bg-gray-800 p-8 rounded shadow-lg w-64 text-center"
              key={index}
            >
              <img
                src={`./assets/${testimonial.image}`}
                alt={testimonial.name}
                className="mx-auto rounded-full w-24 h-24 mb-4"
              />
              <p className="text-lg font-semibold mb-2">{testimonial.name}</p>
              <p className="text-gray-400">{testimonial.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
