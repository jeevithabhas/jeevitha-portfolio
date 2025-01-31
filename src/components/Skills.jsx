import React from "react";

const skillImages = {
  html: "/images/html5.png",
  css: "/images/css-3.png",
  javascript: "/images/java-script.png",
  tailwind: "/images/tailwind css.png",
  react: "/images/react.png",
  redux: "/images/redux.png",
  nodejs: "/images/node-js.png",
  express: "/images/express.webp",
  sql: "/images/sql.png",
  mongodb: "/images/mongodb.webp",
  postman: "/images/postman.svg",
  github: "/images/github.png",
  netlify: "/images/netlify.webp",
  render: "/images/render.jpg",
};

const Skills = () => {
  return (
    <section
      name="skills"
      className="w-full bg-gradient-to-r from-blue-900 via-[#1E293B] to-black text-white py-12"
    >
      <div className="max-w-[1100px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="w-full flex justify-center items-center flex-col mb-7">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500 text-center">
            Skills
          </p>
          <p className="py-4 text-lg sm:text-xl text-center px-2 md:px-0">
            Driven by innovation and the art of crafting elegant code. Here are
            the technologies that fuel my journey.
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8 text-center py-8">
          {Object.entries(skillImages).map(([skill, image]) => (
            <div
              key={skill}
              className="group transition-all duration-300 ease-in-out"
            >
              <img
                src={image}
                alt={skill}
                className="w-16 mx-auto group-hover:scale-110 group-hover:opacity-80 transition-transform"
              />
              <p className="mt-2 text-sm sm:text-base group-hover:text-cyan-500">
                {skill.charAt(0).toUpperCase() + skill.slice(1)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
