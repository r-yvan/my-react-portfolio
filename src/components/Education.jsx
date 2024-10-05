import React from "react";

const Education = () => {
  return (
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
  );
};

export default Education;
