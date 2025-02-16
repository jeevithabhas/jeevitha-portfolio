import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full bg-gradient-to-r from-blue-900 via-midnight-800 to-black text-gray-200 flex flex-col justify-center items-center p-6 relative"
    >
      <div className="flex flex-col max-w-4xl w-full mb-32">
        {/* Added margin-bottom to prevent overlap */}
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
          {/* Contact Card - Email */}
          <div className="glass-card">
            <FaEnvelope className="icon" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <a
              href="mailto:jeevithabhas20@gmail.com"
              className="text-lg text-gray-300 hover:text-cyan-400 transition duration-300"
            >
              jeevithabhas20@gmail.com
            </a>
          </div>

          {/* Contact Card - Phone */}
          <div className="glass-card">
            <FaPhone className="icon" />
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <a
              href="tel:+917397462294"
              className="text-lg text-gray-300 hover:text-cyan-400 transition duration-300"
            >
              +91 7397462294
            </a>
          </div>

          {/* Contact Card - LinkedIn */}
          <div className="glass-card">
            <FaLinkedin className="icon" />
            <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/jeevitha-bhaskar-1316002b7/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-300 hover:text-cyan-400 transition duration-300"
            >
              linkedin.com/in/jeevitha-bhaskar-1316002b7/
            </a>
          </div>

          {/* Contact Card - GitHub (Centered on Large Screens) */}
          <div className="glass-card lg:col-span-1 lg:col-start-2">
            <FaGithub className="icon" />
            <h3 className="text-xl font-semibold mb-2">GitHub</h3>
            <a
              href="https://github.com/jeevithabhas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-300 hover:text-cyan-400 transition duration-300"
            >
              github.com/jeevithabhas
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

      {/* Custom Styles */}
      <style jsx>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          padding: 20px;
          text-align: center;
          transition: all 0.3s ease-in-out;
          box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
        }

        .glass-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 40px rgba(31, 38, 135, 0.5);
        }

        .icon {
          font-size: 3rem;
          color: #0ff;
          transition: color 0.3s ease-in-out;
        }

        .glass-card:hover .icon {
          color: #fff;
        }
      `}</style>
    </div>
  );
};

export default Contact;
