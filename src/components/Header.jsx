import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-10">
      <nav className="flex justify-between items-center mb-12">
        <ul className="flex space-x-6 text-lg">
          <li className="hover:text-green-400 cursor-pointer">Home</li>
          <li className="hover:text-green-400 cursor-pointer">About Me</li>
          <li className="hover:text-green-400 cursor-pointer">Education</li>
          <li className="hover:text-green-400 cursor-pointer">Skills</li>
          <li className="hover:text-green-400 cursor-pointer">Projects</li>
        </ul>
      </nav>
      <div className="text-center">
        <h1 className="text-4xl font-bold">Hello There I'm <span className="text-green-400">Rubuto Yvan</span></h1>
        <h2 className="text-2xl font-semibold mt-2">FullStack Developer</h2>
        <p className="text-gray-400 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        <button className="bg-green-500 text-white py-2 px-6 mt-6 rounded hover:bg-green-400 transition">Connect</button>
      </div>
    </header>
  );
};

export default Header;
