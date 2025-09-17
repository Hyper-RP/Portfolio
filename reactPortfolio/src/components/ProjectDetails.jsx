import React, { useCallback } from "react";
import { useParams, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles.css";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ProjectDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const { project } = location.state || {};

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  if (!project) {
    return <div className="text-center text-lg py-20">Project not found. Please return to the portfolio.</div>;
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
      image: "url('https://videos.pexels.com/video-files/1526909/1526909-hd_1280_720_25fps.mp4')",
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover",
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="project-details-container bg-gray-50 min-h-screen p-4 md:p-12"
    >
      <video autoPlay loop muted style={{
        position: "absolute",
        width: "100%",
        left: "50%",
        top: "50%",
        height: "100%",
        objectFit: "cover",
        transform: "translate(-50%, -50%)",
        zIndex: "-1"
      }}>
        <source src="https://videos.pexels.com/video-files/1526909/1526909-hd_1280_720_25fps.mp4" type="video/mp4" />
      </video>
      <Particles id="tsparticles" init={particlesInit} options={fireParticles} />
      <motion.div 
        className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden"
        initial={{ y: -150, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
      >
        <div className="relative flex items-center justify-center w-full h-full bg-amber-300">
          <img src={project.img} alt={project.Name} className=" w-[25rem] h-[18rem]  md:w-full  md:h-[24rem] my-[1rem] px-[1rem] object-center " />
          <div className="absolute inset-0   flex items-center justify-center">
            {/* <motion.h1 
              className="text-5xl font-extrabold text-white text-center px-4"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 120 }}
            >
              {project.Name}
            </motion.h1> */}
          </div>
        </div>
        <div className="p-8 md:p-12">
          <motion.p 
            className="text-xl text-gray-700 mb-8 leading-relaxed"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}  
            transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
          >
            {project.description}
          </motion.p>
          <motion.div 
            className="flex flex-wrap gap-4 mb-10"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 100 }}
          >
            {project.technologies.map((tech, index) => (
              <span key={index} className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-base font-semibold">
                {tech}
              </span>
            ))}
          </motion.div>
          <motion.div 
            className="flex flex-col md:flex-row gap-6"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, type: "spring", stiffness: 100 }}
          >
            {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg transform hover:scale-105 text-center">
                Live Demo
              </a>
            )}
            {project.sourceCode && (
              <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg transform hover:scale-105 text-center">
                Source Code
              </a>
            )}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetails;
