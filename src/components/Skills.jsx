import React from 'react';

const Skills = () => {
  const skills = [
    { category: "Frontend", list: ["React JS", "Vue JS", "Angular JS", "Tailwind CSS", "Bootstrap CSS", "React Native"] },
    { category: "Backend", list: ["Node JS", "Django", "Spring Boot", "MongoDB", "PHP"] },
    { category: "Others", list: ["Figma", "Photoshop", "Illustrator"] }
  ];

  return (
    <section className="bg-gray-900 text-white py-16 px-10">
      <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>
      <div className="flex flex-wrap justify-center gap-12">
        {skills.map((skill, index) => (
          <div className="bg-gray-800 p-8 rounded shadow-lg w-64" key={index}>
            <h3 className="text-xl font-semibold mb-4">{skill.category}</h3>
            <ul className="space-y-2">
              {skill.list.map((item, i) => (
                <li key={i} className="text-gray-400">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
