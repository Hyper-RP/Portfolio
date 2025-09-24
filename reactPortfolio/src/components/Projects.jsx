import React from "react";
import "../styles.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import proj1 from "../assets/Project1.png";
import proj2 from "../assets/Project2.png";
import proj3 from "../assets/Project3.png";

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const ArrowLeftIcon = () => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>
);

const GithubIcon = () => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

function Projects() {
  const projects = [
    {
      img: proj3,
      Name: "Banking Portal",
      description:
        "This is an open-source project with all banking features where I have worked on JWT Authentication and REST API's",
      technologies: ["Java","Spring Boot", "SQL"],
      liveLink: "https://your-live-link.com/password-generator",
      sourceCode: "https://github.com/Hyper-RP/BankingPortal-API",
    },
    {
      img: proj2,
      Name: "Portfolio",
      description:
        "Created a dynamic portfolio site with real time database(firestore) to recieve user feedback and to make it bit attractive I've added smooth animations with Framer Motion and scroll-based effects using AOS to enhance user experience.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "AOS", "Firebase"],
      liveLink: "https://your-live-link.com/discord-clone",
      sourceCode: "https://github.com/Hyper-RP",
    },
    {
      img: proj1,
      Name: "Razorpay Clone",
      description:
        "Developed a responsive clone of Razorpay’s website using HTML, Tailwind CSS, and JavaScript, ensuring a user-friendly interface.",
      technologies: ["HTML", "Tailwind CSS", "JavaScript"],
      liveLink: "https://your-live-link.com/razorpay-clone",
      sourceCode: "https://github.com/Hyper-RP/Razorpay-Clone",
    },
  ];

  return (
    <motion.section
      id="projects"
      className="py-20 bg-slate-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center" variants={fadeUp}>
          
          <p className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            Check Out My Recent Work
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Here are a few projects I've worked on recently. Want to see more?
            Email me.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={stagger}
        >
          {projects.map((project, idx) => (
            <Link to={`/project/${idx}`} state={{ project }} key={idx}>
              <motion.div
                className="group relative block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                variants={fadeUp}
                whileHover={{ y: -8 }}
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={project.img}
                    alt={project.Name}
                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {project.Name}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="text-xs font-semibold bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    {project.description.substring(0, 100)}...
                  </p>
                  <span className="font-semibold text-indigo-600 group-hover:underline flex items-center">
                    View Project
                    <svg
                      className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      ></path>
                    </svg>
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Projects;
