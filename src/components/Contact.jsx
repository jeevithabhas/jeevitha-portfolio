import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full bg-gradient-to-r from-blue-900 via-midnight-800 to-black text-gray-200 flex flex-col justify-center items-center p-6"
    >
      <div className="flex flex-col max-w-4xl w-full">
        {/* Contact Section Header */}
        <div className="pb-8 flex flex-col justify-center w-full h-full items-center animate__animated animate__fadeIn animate__delay-1s mt-20 sm:mt-0">
          <p className="text-4xl sm:text-5xl font-bold inline border-b-4 border-cyan-500 text-center mb-6">
            Contact Me
          </p>
          <p className="text-lg sm:text-xl text-center mt-2 opacity-80">
            Let’s connect! Reach out for collaborations or inquiries.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {/* Contact Card 1 */}
          <div className="bg-gradient-to-r from-blue-800 via-midnight-600 to-black p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center">
            <FaEnvelope className="text-4xl text-cyan-500 mb-4 transition-all duration-300 transform hover:text-white" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <a
              href="mailto:jeevithabhas20@gmail.com"
              className="text-lg text-gray-300 hover:text-cyan-400 transition duration-300"
            >
              jeevithabhas20@gmail.com
            </a>
          </div>

          {/* Contact Card 2 */}
          <div className="bg-gradient-to-r from-blue-800 via-midnight-600 to-black p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center">
            <FaPhone className="text-4xl text-cyan-500 mb-4 transition-all duration-300 transform hover:text-white" />
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <a
              href="tel:+917397462294"
              className="text-lg text-gray-300 hover:text-cyan-400 transition duration-300"
            >
              +91 7397462294
            </a>
          </div>

          {/* Contact Card 3 */}
          <div className="bg-gradient-to-r from-blue-800 via-midnight-600 to-black p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center">
            <FaLinkedin className="text-4xl text-cyan-500 mb-4 transition-all duration-300 transform hover:text-white" />
            <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/jeevitha-bhaskar-1316002b7/"
              className="text-lg text-gray-300 hover:text-cyan-400 transition duration-300"
            >
              linkedin.com/in/jeevitha-bhaskar-1316002b7/
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-white py-6 mt-8 w-full">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-sm sm:text-base md:text-lg">
            &copy; 2024 <span className="font-bold">Jeevitha B</span>. All
            rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
