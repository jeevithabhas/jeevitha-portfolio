import React, { useState } from "react";
import { FaFilePdf } from "react-icons/fa"; // PDF file icon
import resumeFile from "../assets/Jeevitha B Resume - Full Stack.pdf"; // Resume file
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
      className="h-screen w-full flex flex-col justify-between items-center text-white py-8"
      style={{
        background: "linear-gradient(to top, #537895 0%, #09203f 100%)",
      }}
    >
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center px-4 mt-16 md:mt-0 md:flex-row max-w-screen-lg w-full flex-grow">
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
            {/* View Resume - opens in new tab */}
            <a
              href={resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              className="group text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              View Resume
              <FaFilePdf size={25} className="ml-3" /> {/* PDF file icon */}
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
      <div className="flex justify-center w-full mt-2 sm:mt-0 mb-6 sm:mb-12">
        <video
          src="/images/scroll.webm"
          autoPlay
          loop
          muted
          onClick={handleScrollDown}
          className="cursor-pointer transition-all duration-500 w-14 h-14 sm:w-18 sm:h-18 hover:scale-110"
        />
      </div>
    </section>
  );
};

export default Home;
