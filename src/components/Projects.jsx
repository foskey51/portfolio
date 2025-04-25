import { GearIcon } from "../utils/LogoIcon";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    description: "A minimal personal portfolio built with Next.js and Tailwind CSS.",
    link: "https://github.com/yourgithub/portfolio",
  },
  {
    title: "Task Manager App",
    description: "A simple, responsive task management tool using React and Firebase.",
    link: "https://github.com/yourgithub/task-manager",
  },
  {
    title: "Weather Dashboard",
    description: "A weather forecast dashboard pulling data from OpenWeatherMap API.",
    link: "https://github.com/yourgithub/weather-dashboard",
  },
  {
    title: "Chat Application",
    description: "A real-time chat application powered by Socket.io and Node.js.",
    link: "https://github.com/yourgithub/chat-app",
  },
];

const Projects = () => {
  return (
    <>
      <div className="group flex flex-col w-[90%] mb-5 pr-1 pt-3 border rounded-lg bg-gradient-to-tr backdrop-blur-lg dark:from-white/15 dark:to-black/4 mx-auto shadow-md shadow-gray-400 dark:shadow-md dark:shadow-gray-400 dark:text-white text-black md:mb-0 md:h-full md:w-full overflow-auto">

        <div className="flex flex-col items-center justify-center px-4 py-6 text-center">
          <div className="flex items-center gap-3">
            <GearIcon className="size-9 group-hover:animate-spin text-black dark:text-gray-300" />
            <span className="text-4xl font-extrabold font-mono dark:text-gray-300 text-black tracking-wide">
              PROJECTS
            </span>
          </div>
          <p className="mt-2 text-sm dark:text-gray-400 text-gray-500 max-w-md">
            A list of my recent work, from experiments to real-world applications.
          </p>
        </div>

        <div className="flex flex-col gap-4 px-4 pb-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col p-4 border dark:border-gray-700 border-gray-300 rounded-lg hover:scale-[1.03] transition-transform duration-300 ease-in-out"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold font-mono">{project.title}</h3>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-xl hover:text-fuchsia-500 transition-colors" />
                </a>
              </div>
              <p className="text-sm mt-2 dark:text-gray-400 text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
