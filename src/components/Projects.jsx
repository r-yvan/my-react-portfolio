import React from "react";
import temp from "../assets/temp.jpg";

const Projects = () => {
  const projects = [
    {
      title: "React To Do App",
      description: "Simple Project to exercise react js development..",
      img: {},
    },
    {
      title: "Youtube Clone",
      description: "Simply a Youtube Clone with functionalities like those of Youtube..",
      img: {},
    },
    {
      title: "Novium Tech Informer",
      description: "Website that provide real time information about the outside tech gadgets..",
      img: {},
    },
    {
      title: "React To Do App",
      description: "Simple Project to exercise react js development..",
      img: {},
    },
    {
      title: "Youtube Clone",
      description: "Simply a Youtube Clone with functionalities like those of Youtube..",
      img: {},
    },
    {
      title: "Novium Tech Informer",
      description: "Website that provide real time information about the outside tech gadgets..",
      img: {},
    },
  ];

  return (
    <div className="border-b-4 pb-20 pt-10 border-gray-500 bg-custom text-white border-opacity-50 z-30">
      <div className="flex justify-center z-20">
        <h2 className="text-6xl font-bold mb-20 z-20">
          My <span className="text-green-400">Projects</span>
        </h2>
      </div>
      <div className="flex flex-row overflow-x-auto justify-center for-scrollbar gap-10 start-2 z-20">
        {projects.map((project, index) => (
          <div
            className="flex flex-col overflow-y-auto basis-80 flex-shrink-0 for-scrollbar bg-white bg-opacity-10 backdrop-blur-3xl border-2 border-white border-opacity-10 duration-200 ease-out hover:scale-95 hover:shadow-custom hover:border-green-400 hover:border-opacity-100 rounded-2xl p-2 z-20"
            key={index}
          >
            <div className="w-full rounded-xl overflow-hidden mb-4">
              <img src={temp} alt="" />
            </div>
            <div className="flex flex-col h-32 pl-3 border-l-4 border-green-400">
              <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-400">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
