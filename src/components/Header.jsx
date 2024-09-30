import React from "react";
import background from "../assets/background.png";
import profile from "../assets/me.png"; // Replace with the actual path to your profile image
// import netflixLogo from '../assets/netflix.png'; // Replace with the actual path to the Netflix logo
// import googleLogo from '../assets/google.png'; // Replace with the actual path to the Google logo
// import paypalLogo from '../assets/paypal.png'; // Replace with the actual path to the PayPal logo
// import skypeLogo from '../assets/skype.png'; // Replace with the actual path to the Skype logo
// import amazonLogo from '../assets/amazon.png'; // Replace with the actual path to the Amazon logo

const Header = () => {
  return (
    <header
      className="bg-black text-white font-body relative overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      <nav className="absolute top-0 left-0 right-0 p-5 z-10">
        {" "}
        {/* Added z-10 for layering */}
        <ul className="flex justify-center items-center space-x-6 text-lg">
          <li className="hover:text-green-400 cursor-pointer">Home</li>
          <li className="hover:text-green-400 cursor-pointer">About Me</li>
          <li className="hover:text-green-400 cursor-pointer">Education</li>
          <li className="hover:text-green-400 cursor-pointer">Skills</li>
          <li className="hover:text-green-400 cursor-pointer">Projects</li>
        </ul>
      </nav>
      <img
        src={background}
        alt="background"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-100 z-0"
      />
      <div className="mx-auto px-4 py-20 relative z-10 min-h-screen">
        <div className="grid grid-cols-5 grid-rows-1 gap-10 mt-24 items-center">
          <div className="col-end-3 w-96 h-96 rounded-2xl overflow-hidden mb-6 md:mb-0 md:mr-12">
            <img
              src={profile}
              alt="Rubuto Yvan"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-start-3 col-span-2 pl-16 text-center md:text-left md:ml-12">
            <h5 className="text-2xl md:text-4xl font-bold">
              Hello There I'm{" "}
              <span className="text-green-400">Rubuto Yvan</span>
            </h5>
            <h1 className="w-full py-6 text-6xl text-green-400 font-bold">
              Full Stack Developer
            </h1>
            <p className="text-gray-300 mt-4 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              tincidunt felis nec augue vestibulum, sit amet cursus sapien
              feugiat. Curabitur sagittis convallis nisl, vel accumsan eros
              tincidunt in. Donec sodales, metus ac varius lobortis, lacus lorem
              volutpat urna, sed viverra arcu odio in justo.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center flex-wrap gap-8 mt-12">
          {/* <img src={netflixLogo} alt="Netflix" className="h-8" /> */}
          {/* <img src={googleLogo} alt="Google" className="h-8" /> */}
          {/* <img src={paypalLogo} alt="PayPal" className="h-8" /> */}
          {/* <img src={skypeLogo} alt="Skype" className="h-8" /> */}
          {/* <img src={amazonLogo} alt="Amazon" className="h-8" /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
