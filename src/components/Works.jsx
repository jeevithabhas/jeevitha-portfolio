import React from "react";
import { FaLink } from "react-icons/fa";

const projectImages = {
  passwordResetApp: "/images/Pw.svg",
  incomeExpensesCalculator: "/images/Income.jpg",
  movieSearchingApp: "/images/Movie.jpg",
  collegePlacementManagementSystem: "/images/Clg.jpg",
  landingPage: "/images/landing.png", // New project image
};

const projectDetails = {
  passwordResetApp: {
    description:
      "A password reset application that allows users to securely reset their forgotten passwords via email with a verification link.",
    techStack: [
      "React.js",
      "Bootstrap",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],
    liveLink: "https://pwresetapp.netlify.app/",
    codeLink: "https://github.com/jeevithabhas/PW-Reset_Flow",
  },
  incomeExpensesCalculator: {
    description:
      "A personal finance tool to manage income and expenses, calculate total balance, and generate reports. Includes features like filters and dynamic updates.",
    techStack: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    liveLink: "https://jeevithainexpensecalc.netlify.app/",
    codeLink: "https://github.com/jeevithabhas/Income-Expense-Calculator",
  },
  movieSearchingApp: {
    description:
      "A movie search application that uses the OMDB API to search for movies and shows, allows adding to favorites, and displaying detailed information about selected titles.",
    techStack: ["React", "Tailwind CSS", "OMDB API", "React Router"],
    liveLink: "https://jeevithamovieapp.netlify.app/",
    codeLink: "https://github.com/jeevithabhas/movie-search-app",
  },
  collegePlacementManagementSystem: {
    description:
      "A management system for college placements, where students can apply for jobs, and placement officers can track applications and interviews.",
    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "EJS",
      "React",
      "Tailwind CSS",
    ],
    liveLink: "https://collegeplacementsys.netlify.app/",
    codeLink: "https://github.com/jeevithabhas/college-project",
  },
  landingPage: {
    description:
      "A responsive and visually appealing landing page designed using modern UI principles. Features a clean and user-friendly layout with smooth styling.",
    techStack: ["HTML", "Tailwind CSS", "Figma"],
    liveLink: "https://jeevithabhas.netlify.app/",
    codeLink: "https://github.com/jeevithabhas/landing-page-2",
  },
};

const Works = () => {
  return (
    <div name="work" className="w-full bg-[#0a192f] text-gray-300 py-10 mb-10">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 w-full flex justify-center items-center flex-col">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500">
            Work
          </p>
          <p className="py-6 text-2xl text-center">
            Check out some of my most recent work
          </p>
        </div>
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {Object.keys(projectImages).map((projectKey) => {
            const project = projectImages[projectKey];
            const { description, techStack, liveLink, codeLink } =
              projectDetails[projectKey];

            return (
              <div
                key={projectKey}
                style={{
                  backgroundImage: `url(${project})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="group container rounded-md overflow-hidden mx-auto relative h-60 sm:h-72 md:h-80 lg:h-80 transform transition-transform duration-300 sm:hover:scale-105"
              >
                <div className="absolute inset-0 bg-black opacity-50 sm:group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex justify-center items-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 text-center text-white">
                  <div>
                    <span className="text-lg sm:text-2xl font-bold block text-cyan-600">
                      {projectKey.replace(/([A-Z])/g, " $1").toUpperCase()}
                    </span>
                    <p className="pt-2 text-xs sm:text-sm md:text-lg">
                      {description}
                    </p>
                    <p className="pt-2 italic text-xs sm:text-sm text-emerald-300">
                      Tech Stack: {techStack.join(", ")}
                    </p>
                    <div className="pt-4">
                      <a
                        href={liveLink}
                        className="inline-block text-xs sm:text-lg px-4 py-2 sm:px-6 sm:py-3 m-2 bg-white text-gray-700 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition duration-300"
                      >
                        Live <FaLink className="ml-2 inline" />
                      </a>
                      <a
                        href={codeLink}
                        className="inline-block text-xs sm:text-lg px-4 py-2 sm:px-6 sm:py-3 m-2 bg-white text-gray-700 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition duration-300"
                      >
                        Code <FaLink className="ml-2 inline" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Works;
