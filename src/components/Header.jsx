import React from "react";
import background from "../assets/background.png";
import profile from "../assets/me.png"; // Replace with the actual path to your profile image
// import netflixLogo from '../assets/netflix.png'; // Replace with the actual path to the Netflix logo
// import googleLogo from '../assets/google.png'; // Replace with the actual path to the Google logo
// import paypalLogo from '../assets/paypal.png'; // Replace with the actual path to the PayPal logo
// import skypeLogo from '../assets/skype.png'; // Replace with the actual path to the Skype logo
// import amazonLogo from '../assets/amazon.png'; // Replace with the actual path to the Amazon logo

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
        className="absolute top-0 left-0 w-full h-full object-cover opacity-100 z-0"
      />
      <div className="border-b-4 border-gray-500 pb-20">
        <div className="mx-auto px-4 py-20 relative z-10">
          <div className="grid grid-cols-5 grid-rows-1 gap-10 mt-24 items-center">
            <div className="bg-green-500 w-80 h-80 rounded-2xl -z-20 absolute left-80 top-36 rotate-90"></div>
            <div className="border-4 border-white w-80 h-80 rounded-2xl absolute left-72 top-40 -z-10"></div>
            <div className="col-end-3 w-80 h-80 rounded-2xl overflow-hidden mb-6 md:mb-0 md:mr-12 shadow-2xl">
              <img
                src={profile}
                alt="Rubuto Yvan"
                className="w-full h-full object-cover"
              />
            </div>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas tincidunt felis nec augue vestibulum, sit amet cursus
                sapien feugiat. Curabitur sagittis convallis nisl, vel accumsan
                eros tincidunt in. Donec sodales, metus ac varius lobortis,
                lacus lorem volutpat urna, sed viverra arcu odio in justo.
              </p>
            </div>
            <div className="flex justify-center items-center flex-wrap gap-8 mt-12">
              {/* <img src={netflixLogo} alt="Netflix" className="h-8" /> */}
              {/* <img src={googleLogo} alt="Google" className="h-8" /> */}
              {/* <img src={paypalLogo} alt="PayPal" className="h-8" /> */}
              {/* <img src={skypeLogo} alt="Skype" className="h-8" /> */}
              {/* <img src={amazonLogo} alt="Amazon" className="h-8" /> */}
            </div>
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
      <div className="flex flex-col justify-center pt-10 ">
        <div className="flex justify-center z-10 mb-24">
          <h2 className="text-6xl font-bold">
            About <span className="text-green-400">Me</span>
          </h2>
        </div>
        <div className="grid grid-cols-12 grid-rows-1 gap-12">
          <div className="col-start-3 col-end-7 border-r-4 border-opacity-20 pr-20 border-gray-500 z-10">
            <h5>
              <a href="https://git.io/typing-svg">
                <img
                  src="https://readme-typing-svg.herokuapp.com?font=Poppins&weight=700&size=50&duration=4000&pause=1000&color=FFFFFF&width=1000&height=100&lines=Hello+There+I'm+Rubuto+Yvan;I'+m+a+FullStack+Developer"
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
    </header>
  );
};

export default Header;
