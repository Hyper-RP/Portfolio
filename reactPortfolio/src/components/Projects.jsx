import React from "react";
import "../styles.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import proj1 from "../assets/Project1.png";
import proj2 from "../assets/Project2.png";
import proj3 from "../assets/Project3.png";
import proj4 from "../assets/Project4.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

function Projects() {
  const projects = [
    {
      img: proj1,
      Name: "Razorpay Clone",
      description: "A functional clone of the Razorpay website's homepage, built to demonstrate frontend skills in HTML and Tailwind CSS.",
      technologies: ["HTML", "Tailwind CSS", "JavaScript"],
      liveLink: "https://your-live-link.com/razorpay-clone",
      sourceCode: "https://github.com/Hyper-RP"
    },
    {
      img: proj2,
      Name: "Discord Clone",
      description: "A real-time chat application mimicking Discord's core features, including servers, channels, and messaging.",
      technologies: ["React", "Node.js", "Express", "Socket.io", "MongoDB"],
      liveLink: "https://your-live-link.com/discord-clone",
      sourceCode: "https://github.com/Hyper-RP"
    },
    {
      img: proj3,
      Name: "Password Generator",
      description: "A tool to generate strong, random passwords with customizable options for length and character types.",
      technologies: ["React", "JavaScript", "CSS"],
      liveLink: "https://your-live-link.com/password-generator",
      sourceCode: "https://github.com/Hyper-RP"
    },
    {
      img: proj4,
      Name: "Weather App",
      description: "A weather application that provides real-time weather data for any location, using a third-party weather API.",
      technologies: ["React", "API Integration", "CSS"],
      liveLink: "https://your-live-link.com/weather-app",
      sourceCode: "https://github.com/Hyper-RP"
    }
  ];

  return (
    <motion.section
      id="projects"
      className="py-16 bg-gradient-to-b from-white to-slate-100"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={stagger}
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-12 text-gray-800"
        variants={fadeUp}
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-10">
        {projects.map((project, idx) => (
          <Link to={`/project/${idx}`} state={{ project }} key={idx}>
            <motion.div
              className="shadow-xl rounded-xl overflow-hidden bg-white p-4 hover:shadow-2xl transition duration-300"
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={project.img}
                alt={`Project ${idx + 1}`}
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-center text-gray-700">
                 {project.Name}
              </h3>
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
