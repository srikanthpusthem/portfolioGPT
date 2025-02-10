export default function ProjectsPage() {
    const projects = [
      {
        title: "SrikanthGPT",
        description: "An AI-powered portfolio app showcasing projects, skills, and more with a conversational UI.",
        techStack: ["Next.js", "FastAPI", "Tailwind CSS", "OpenAI"],
        link: "https://github.com/srikanthpusthem/PortfolioGPT",
      },
      {
        title: "FARRACO",
        description: "A mobile app providing real-time soil quality insights to farmers using IoT and machine learning.",
        techStack: ["Flutter", "Firebase", "Python", "IoT"],
        link: "https://github.com/srikanthpusthem/FARRACO",
      },
      {
        title: "Doctor Booking System",
        description: "A MERN stack app for booking doctor appointments with user and doctor dashboards.",
        techStack: ["React", "Node.js", "Express.js", "MongoDB"],
        link: "https://github.com/srikanthpusthem/DoctorBookingSystem",
      },
      {
        title: "Automatic Timetable Generator",
        description: "An AI-powered scheduler for generating conflict-free timetables based on constraints.",
        techStack: ["Python", "Flask", "React", "MongoDB"],
        link: "https://github.com/srikanthpusthem/TimetableGenerator",
      },
    ];
  
    return (
      <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
        <div className="max-w-4xl w-full space-y-6">
          {/* Title Section */}
          <div className="rounded-lg p-4">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 text-center">
              Here are some projects I’ve worked on!
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400 text-center">
              Click on a project to explore more details.
            </p>
          </div>
  
          {/* Projects List */}
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-6 shadow transition hover:shadow-lg"
            >
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-100">
                {project.title}
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {project.description}
              </p>
              <div className="mt-4">
                <span className="font-medium text-gray-700 dark:text-gray-200">
                  Tech Stack:
                </span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4 text-right">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black-600 dark:text-blue-400 hover:underline text-sm font-medium"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }