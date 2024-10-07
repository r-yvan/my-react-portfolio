import React from "react";
import achievement from "../assets/achievement.png";

const Skills = () => {
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
    <div className="flex flex-col items-center backdrop-blur-3xl bg-custom bg-opacity-10 text-white z-20">
      <div className="flex justify-center mb-20 z-10">
        <h2 className="text-6xl font-bold text-green-400">Skills</h2>{" "}
      </div>
      <div className="flex flex-row justify-center gap-10">
        {skills.map((skill) => (
          <div className="flex flex-col w-80 h-96 overflow-y-auto for-scrollbar bg-white bg-opacity-10 backdrop-blur-2xl p-2 border-2 border-white border-opacity-10 rounded-2xl">
            <div className="flex justify-center font-bold text-3xl mt-2 mb-5">
              <h1>{skill.category}</h1>
            </div>
            <div className="flex flex-col">
              {skill.list.map((listSkill) => (
                <div className="py-2 px-2 rounded-2xl hover:backdrop-blur-3xl hover:bg-white hover:bg-opacity-10 border-2 border-opacity-0 hover:border-opacity-100 border-green-400 m-1">
                  <div className="flex flex-row pl-1 items-center">
                    <div className="flex flex-row items-center">
                      <div>
                        <img
                          src={achievement}
                          alt="achievement"
                          className="w-8"
                        />
                      </div>
                      <div className="pl-3">{listSkill}</div>
                    </div>
                    <div></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
