import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full z-50">
      <div
        className="flex justify-between items-center w-full h-16 px-4 md:px-8 transition-all duration-500 ease-in-out md:bg-gradient-to-r md:from-[#360033] md:to-[#0b8793] text-gray-300 shadow-xl"
        style={{ backgroundColor: "transparent" }}
      >
        {/* Navbar Branding */}
        <div className="text-xl font-thin italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient-x cursor-pointer">
          JB
        </div>

        {/* Hamburger Icon for Mobile */}
        <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
          {!nav ? <FaBars size={20} /> : <FaTimes size={20} />}
        </div>

        {/* Desktop Navbar Links */}
        <ul className="hidden md:flex gap-x-8 transition-all duration-300">
          {["home", "about", "skills", "work", "contact"].map((item) => (
            <li
              key={item}
              className="group relative hover:text-cyan-500 hover:scale-110 transition-all duration-300"
            >
              <Link
                to={item}
                smooth={true}
                duration={500}
                className="cursor-pointer group-hover:text-cyan-500"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-500 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navbar */}
      {nav && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-0 left-0 w-full h-screen bg-black/70 backdrop-blur-md flex flex-col justify-center items-center"
        >
          <ul className="text-white text-2xl space-y-6">
            {["home", "about", "skills", "work", "contact"].map((item) => (
              <li
                key={item}
                className="opacity-50 hover:opacity-100 transition"
                onClick={handleClick}
              >
                <Link
                  to={item}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Sidebar Social Icons with Hover Effects */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 transition-all duration-300">
        <ul>
          <li className="w-40 h-14 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600 group hover:bg-gray-800">
            <a
              href="https://github.com/jeevithabhas"
              className="flex justify-between items-center w-full text-gray-300 px-4 group-hover:text-white transition-all duration-300"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-40 h-14 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 group hover:bg-blue-800">
            <a
              href="https://www.linkedin.com/in/jeevitha-bhaskar-1316002b7/"
              className="flex justify-between items-center w-full text-gray-300 px-4 group-hover:text-white transition-all duration-300"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
