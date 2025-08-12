import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-900 to-blue-500 text-white text-center px-6 py-16"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Hi, I'm Erima Nekesa Linda
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mb-6">
        A passionate <span className="font-semibold text-yellow-300">Data Analyst</span> and{" "}
        <span className="font-semibold text-yellow-300">IT Specialist</span> dedicated to transforming data into actionable insights and building innovative IT solutions.
      </p>
      <div className="flex gap-6 mt-4">
        <a
          href="https://linkedin.com/in/your-linkedin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="hover:text-yellow-300 text-2xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/your-github"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="hover:text-yellow-300 text-2xl"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:your.email@example.com"
          aria-label="Send Email"
          className="hover:text-yellow-300 text-2xl"
        >
          <FaEnvelope />
        </a>
      </div>
      <a
        href="/assets/erima-resume.pdf"
        download
        aria-label="Download Resume"
        className="mt-8 inline-block px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-300 transition"
      >
        Download Resume
      </a>
    </section>
  );
};

export default HeroSection;
