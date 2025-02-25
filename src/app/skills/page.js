"use client";

import {
  SiJavascript,
  SiPython,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiDocker,
} from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa";

export default function SkillsPage() {
  const skills = [
    { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-500" },
    { name: "Python", icon: <SiPython />, color: "text-blue-500" },
    { name: "React", icon: <SiReact />, color: "text-blue-400" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-500" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-700" },
    { name: "Express.js", icon: <SiExpress />, color: "text-gray-500" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-teal-400" },
    { name: "Java", icon: <FaJava />, color: "text-red-500" },
    { name: "AWS", icon: <FaAws />, color: "text-orange-400" },
    { name: "Docker", icon: <SiDocker />, color: "text-blue-600" },
  ];

  return (
    <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-900 px-4 py-10">
      <div className="max-w-4xl w-full space-y-6">
        {/* Title Section */}
        <div className="rounded-lg p-4 text-center">
          <h1
            className="
              text-3xl font-bold 
              text-transparent bg-clip-text
              bg-gradient-to-r from-blue-400 to-green-400
            "
          >
            My Technical Skills
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Here are the technologies and tools I excel at.
          </p>
        </div>

        {/* Skills Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                flex flex-col items-center p-4
                bg-white dark:bg-gray-800
                border border-gray-200 dark:border-gray-700
                rounded-lg shadow
                hover:shadow-lg transition-shadow duration-300
              "
            >
              <div className={`text-4xl ${skill.color} mb-3`}>{skill.icon}</div>
              <h2 className="text-lg font-medium text-gray-700 dark:text-gray-100">
                {skill.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}