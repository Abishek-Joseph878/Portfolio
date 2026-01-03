// File: App.jsx
import { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function App() {
  const projects = [
    {
      name: "Personal Portfolio",
      desc: "Responsive React portfolio with Tailwind and animations.",
      tech: ["React", "Tailwind", "Framer Motion"],
      link: "#",
    },
    {
      name: "Task Tracker",
      desc: "A modern task management app with local storage.",
      tech: ["HTML", "CSS", "JS"],
      link: "#",
    },
    {
      name: "E-Commerce Landing",
      desc: "Landing page for a startup with smooth scrolling and parallax effects.",
      tech: ["React", "Tailwind", "GSAP"],
      link: "#",
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Abishek</h1>
        <p className="text-xl mb-6">Front-End Developer | React & Tailwind Enthusiast</p>
        <a
          href="#projects"
          className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition"
        >
          View My Work
        </a>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 md:px-20 bg-gray-800">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed max-w-3xl">
          I'm a passionate front-end developer creating interactive and responsive websites. I enjoy
          turning ideas into engaging digital experiences. When I'm not coding, I’m leveling up my
          skills, exploring new frameworks, and building tools for real-world problems.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 md:px-20 bg-gray-900">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition transform"
            >
              <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
              <p className="mb-3">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm bg-purple-600 px-2 py-1 rounded-full font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="text-indigo-400 font-bold hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 md:px-20 bg-gray-800 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="mb-6">Let's build something awesome together!</p>
        <div className="flex justify-center gap-6 text-2xl mb-6">
          <a href="#" className="hover:text-purple-400"><FaGithub /></a>
          <a href="#" className="hover:text-blue-400"><FaLinkedin /></a>
          <a href="#" className="hover:text-pink-400"><FaInstagram /></a>
        </div>
        <a
          href="mailto:abishek@example.com"
          className="px-6 py-3 bg-purple-600 rounded-lg font-semibold hover:bg-purple-500 transition"
        >
          Email Me
        </a>
      </section>

      <footer className="text-center py-6 bg-gray-900 text-gray-500">
        © 2025 Abishek Joseph. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
