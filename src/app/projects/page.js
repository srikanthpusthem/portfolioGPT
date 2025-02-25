"use client";

export default function ProjectsPage() {
  const projects = [
    {
      title: "SrikanthGPT",
      description:
        "An AI-powered portfolio app showcasing projects, skills, and more with a conversational UI.",
      techStack: ["Next.js", "FastAPI", "Tailwind CSS", "OpenAI"],
      link: "https://github.com/srikanthpusthem/PortfolioGPT",
    },
    {
      title: "FARRACO",
      description:
        "A mobile app providing real-time soil quality insights to farmers using IoT and machine learning.",
      techStack: ["Flutter", "Firebase", "Python", "IoT"],
      link: "https://github.com/srikanthpusthem/FARRACO",
    },
    {
      title: "Doctor Booking System",
      description:
        "A MERN stack app for booking doctor appointments with user and doctor dashboards.",
      techStack: ["React", "Node.js", "Express.js", "MongoDB"],
      link: "https://github.com/srikanthpusthem/DoctorBookingSystem",
    },
    {
      title: "Automatic Timetable Generator",
      description:
        "An AI-powered scheduler for generating conflict-free timetables based on constraints.",
      techStack: ["Python", "Flask", "React", "MongoDB"],
      link: "https://github.com/srikanthpusthem/TimetableGenerator",
    },
  ];

  return (
    <div className="w-full bg-gray-100 dark:bg-gray-900 px-4 py-10">
      <div className="max-w-5xl mx-auto">
        {/* Title Section */}
        <div className="mb-8 text-center">
          <h1
            className="
              text-3xl md:text-4xl font-bold 
              text-transparent bg-clip-text
              bg-gradient-to-r from-blue-400 to-green-400
            "
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            My Recent Projects
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Check out some of the work I’ve done!
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                bg-white/10 backdrop-blur-sm
                border border-gray-200 dark:border-gray-700
                rounded-lg p-6 shadow-sm
                hover:shadow-md transition-shadow
                flex flex-col justify-between
              "
            >
              {/* Project Title & Description */}
              <div>
                <h2
                  className="
                    text-xl font-semibold
                    text-gray-800 dark:text-gray-100
                  "
                  style={{ fontFamily: "'Orbitron', sans-serif" }}
                >
                  {project.title}
                </h2>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="mt-4">
                <span className="font-medium text-gray-700 dark:text-gray-200">
                  Tech Stack:
                </span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="
                        px-3 py-1
                        bg-gray-100 dark:bg-gray-800
                        text-gray-800 dark:text-gray-200
                        text-xs rounded-full
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Project Link */}
              <div className="mt-4 text-right">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-block px-4 py-2
                    text-sm font-medium
                    text-white
                    bg-blue-600 hover:bg-blue-700
                    dark:bg-blue-500 dark:hover:bg-blue-600
                    rounded-md
                    transition-colors
                    hover:shadow-[0_0_10px_rgba(59,130,246,0.6)]
                  "
                  style={{ fontFamily: "'Orbitron', sans-serif" }}
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}