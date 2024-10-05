import React from "react";

const Projects = () => {
  return (
    <div className="border-b-4 pb-20 pt-10 border-gray-500 border-opacity-50 z-30">
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
  );
};

export default Projects;
