import React from "react";
import "../styles.css";
import { motion } from "framer-motion";

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
    {img:proj1,Name:"Razorpay Clone"},
     {img:proj2,Name:"Discord Clone"}, 
     {img:proj3,Name:"Password Generator"}, 
     {img:proj4,Name:"Weather App"}];

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
          <motion.div
            key={idx}
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
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
