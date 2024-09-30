import React from 'react';

const Projects = () => {
  const projects = [
    { title: "React Native Project", description: "Lorem ipsum dolor sit amet..." },
    { title: "React Native Project", description: "Lorem ipsum dolor sit amet..." },
    { title: "React Native Project", description: "Lorem ipsum dolor sit amet..." },
  ];

  return (
    <section className="bg-gray-800 text-white py-16 px-10 font-body">
      <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div className="bg-gray-900 p-6 rounded shadow-md" key={index}>
            <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
            <p className="text-gray-400">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
