import React, { useCallback } from "react";
import { useParams, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles.css";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
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
const ProjectDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const { project } = location.state || {};

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  if (!project) {
    return (
      <div className="text-center text-lg py-20">
        Project not found. Please return to the portfolio.
      </div>
    );
  }

  const fireParticles = {
    fpsLimit: 60,
    particles: {
      number: {
        value: 200,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: ["#fdcf58", "#757676", "#f27d0c", "#800909", "#f07f13"],
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
        random: true,
      },
      size: {
        value: 3,
        random: true,
      },
      move: {
        enable: true,
        speed: 6,
        direction: "top",
        random: false,
        straight: false,
        out_mode: "out",
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100,
        },
        push: {
          particles_nb: 4,
        },
      },
    },
    retina_detect: true,
    background: {
      color: "#000000",
      image:
        "url('https://videos.pexels.com/video-files/1526909/1526909-hd_1280_720_25fps.mp4')",
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover",
    },
  };
  if (!project) {
    return <div>Loading...</div>;
  }

  // Animation variants for staggering child animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
      animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
      exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="project-details-container fixed inset-0 p-4 md:p-12 overflow-y-auto"
    >

      {/* Main Content Card */}
      <div className="flex items-center justify-center min-h-full">
        <motion.div
          className="max-w-4xl mx-auto bg-white/70 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden"
          initial={{ y: -150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
        >
          {/* Project Image */}
          <div className="w-full h-64 md:h-96 overflow-hidden">
            <img
              src={project.img}
              alt={project.Name}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Project Info */}
          <motion.div
            className="p-8 md:p-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4"
              variants={itemVariants}
            >
              {project.Name}
            </motion.h1>

            <motion.p
              className="text-lg text-gray-700 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              {project.description}
            </motion.p>

            <motion.div className="mb-10" variants={itemVariants}>
              <h4 className="text-xl font-bold text-gray-800 mb-3">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-semibold shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* --- NEW DEMO SECTION --- */}
            {project.demo && (
              <motion.div className="mb-10" variants={itemVariants}>
                <h4 className="text-xl font-bold text-gray-800 mb-4">
                  Project Demo
                </h4>
                <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg border border-gray-200">
                  <iframe
                    src={project.demo}
                    title={`${project.Name} Demo`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </motion.div>
            )}

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              {/* {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-8 rounded-full transition-transform duration-300 shadow-lg transform hover:scale-105 text-center"
                >
                  <ExternalLinkIcon />
                  Live Demo
                </a>
              )} */}
              {project.sourceCode && (
                <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gray-800 text-white font-bold py-3 px-8 rounded-full transition-transform duration-300 shadow-lg transform hover:scale-105 text-center hover:bg-gray-900"
                >
                  <GithubIcon />
                  Source Code
                </a>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
