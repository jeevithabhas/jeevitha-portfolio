import React, { useState } from "react";
import { FaDownload } from "react-icons/fa";
import resumeFile from "../assets/Jeevitha B Resume-Full Stack.pdf"; // Resume file
import Typewriter from "typewriter-effect"; // Import Typewriter Effect

const Home = () => {
  const roles = [
    "Jeevitha Bhaskar",
    "a Full Stack Developer",
    "a Frontend Developer",
    "a Backend Developer",
  ];

  const [isVideoClicked, setIsVideoClicked] = useState(false);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
    setIsVideoClicked(true);
  };

  return (
    <section
      name="home"
      className="min-h-screen w-full flex flex-col justify-between items-center text-white"
      style={{
        background: "linear-gradient(to top, #537895 0%, #09203f 100%)",
      }}
    >
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center px-4 mt-20 md:mt-0 md:flex-row max-w-screen-lg w-full flex-grow">
        {/* Left Content (Text + Buttons) */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h2 className="text-3xl sm:text-6xl font-bold">
            I'm{" "}
            <span className="text-black">
              <Typewriter
                options={{
                  strings: roles,
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 25,
                }}
              />
            </span>
          </h2>
          <p className="text-blue-100 font-semibold font-mono py-4 max-w-md mx-auto md:mx-0">
            Driven by the excitement of building interactive and scalable web
            applications with modern technologies like React, Tailwind, Node.js,
            and MongoDB.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 mt-4 justify-center md:justify-start">
            <a
              href={resumeFile}
              download="Jeevitha_Bhaskar_Resume.pdf"
              className="group text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              Download Resume
              <FaDownload size={25} className="ml-3" />
            </a>
          </div>
        </div>

        {/* Profile Video */}
        <div className="flex justify-center md:justify-end w-full md:w-auto mt-8 md:mt-0">
          <video
            src="/images/programmer.mp4"
            alt="Profile"
            className="rounded-full w-1/2 md:w-64 shadow-lg"
            autoPlay
            loop
            muted
          />
        </div>
      </div>

      {/* Scroll Down Video */}
      <div className="flex justify-center w-full mt-4 mb-4 sm:mt-2 sm:mb-2 md:mt-2">
        <video
          src="/images/scroll.webm"
          autoPlay
          loop
          muted
          onClick={handleScrollDown}
          className="relative cursor-pointer transition-all duration-500 w-12 h-12 sm:w-16 sm:h-16 md:w-22 md:h-22 hover:scale-110"
        />
      </div>
    </section>
  );
};

export default Home;
