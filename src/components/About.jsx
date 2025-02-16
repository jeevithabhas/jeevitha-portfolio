import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";

const About = () => {
  return (
    <section
      name="about"
      className="w-full h-screen flex justify-center items-center p-4 bg-gradient-to-r from-black via-midnight-800 to-blue-900 text-gray-200 animate-gradient"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center h-full">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
            About
          </p>
        </div>
        <div className="text-center">
          <p className="text-xl mt-10">
            A fresher passionate about creating intuitive and innovative web
            solutions. Skilled in JavaScript, React.js, Node.js, Express.js,
            MongoDB, and SQL, with hands-on experience from a full stack
            development course. My mission is to craft software that not only
            looks good but delivers meaningful impact. Always eager to learn and
            build a strong foundation to excel in web development.
          </p>
          <br />
          <p className="text-xl">
            With a Bachelor’s degree in Science (2024) from Dr. MGR Educational
            and Research Institute and a Full Stack Development certification
            from GUVI (2024), I’m equipped with the skills to design and develop
            scalable, user-focused applications.
          </p>
          <div className="flex justify-center mt-8">
            <FaHtml5 className="text-4xl m-4 text-cyan-500" />
            <FaCss3Alt className="text-4xl m-4 text-cyan-500" />
            <FaJs className="text-4xl m-4 text-cyan-500" />
            <FaReact className="text-4xl m-4 text-cyan-500" />
            <FaNodeJs className="text-4xl m-4 text-cyan-500" />
            <FaDatabase className="text-4xl m-4 text-cyan-500" />
          </div>
        </div>
      </div>

      {/* Custom CSS for Innovations */}
      <style jsx>{`
        @keyframes gradientAnimation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientAnimation 15s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default About;
