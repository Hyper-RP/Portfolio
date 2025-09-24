import React, { useContext } from "react";
import { motion } from "framer-motion";
import { portfolioContext } from "../Context/Portfolio";
import { FiDownload } from "react-icons/fi";
function Experience() {
  const { downloadPermission,redirectToContact } = useContext(portfolioContext);

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.section
      id="experience"
      className="py-16 bg-gradient-to-b from-white to-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={stagger}
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-12 text-gray-800"
        variants={fadeUp}
      >
        Experience
      </motion.h2>

      {/* COEP Internship */}
      <motion.div
        className="bg-white shadow-xl rounded-xl my-[1rem] px-8 py-8 max-w-4xl mx-auto border-l-4 border-green-500"
        variants={fadeUp}
      >
        <div className="flex items-center gap-3">
          {/* Your original motion.h3 */}
          <motion.h3 className="text-2xl font-semibold" variants={fadeUp}>
            Software Development Intern
          </motion.h3>

          {/* The flickering light indicator */}
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
        </div>

        <motion.p className="text-gray-500 text-sm mb-4" variants={fadeUp}>
          COEP Technological University · Feb 2025 – Present · Pune, Maharashtra
        </motion.p>
        <motion.ul
          className="list-disc list-inside text-gray-700 space-y-2"
          variants={stagger}
        >
          <motion.li variants={fadeUp}>
            Working on the Virtual Labs project under the National Mission on
            Education through ICT (NMEICT).
          </motion.li>
          <motion.li variants={fadeUp}>
            Focused on designing an interactive Math Quizzes for{" "}
            <a href="https://portal.coepvlab.ac.in/VirtualMathsLab/" target="_blank">
              <b>
                <u>Virtual Math Lab</u>
              </b>
            </a>{" "}
            project and helping students to improve learning and self-evaluation.
          </motion.li>
          <motion.li variants={fadeUp}>
            Collaborating with domain experts and academic mentors at COEP
            Technological University to ensure accuracy and AICTE curriculum
            alignment.
          </motion.li>
        </motion.ul>
      </motion.div>

      {/* NetLeap Internship */}
      <motion.div
        className="bg-white shadow-xl rounded-xl my-[1rem] px-8 py-4 max-w-4xl mx-auto border-l-4 border-blue-500 mb-10"
        variants={fadeUp}
      >
        <motion.h3 className="text-2xl font-semibold mb-2" variants={fadeUp}>
          Web Development Intern
        </motion.h3>
        <motion.p className="text-gray-500 text-sm mb-4" variants={fadeUp}>
          NetLeap Training & IT Solutions · Dec 2023 – Feb 2024 · Nashik,
          Maharashtra
        </motion.p>
        <motion.ul
          className="list-disc list-inside text-gray-700 space-y-2"
          variants={stagger}
        >
          <motion.li variants={fadeUp}>
            Responsible to develop kind of modules and Gained hands-on
            experience in HTML, CSS, and JavaScript for web development.
          </motion.li>
          <motion.li variants={fadeUp}>
            Also I Improved understanding of Web Design and enhanced skills in
            Debugging and Testing frontend code.{" "}
          </motion.li>
          <motion.li variants={fadeUp}>
            Gained basic knowledge of backend development concepts to understand
            how frontend connects with server-side logic.
          </motion.li>
        </motion.ul>
        {downloadPermission ? (
          <button className=" px-4 py-2 rounded-full transition-all duration-300 cursor-pointer">
            <a
              href="netleapCertificate.pdf"
              download="netleapCertificate.pdf"
              className=" 
              inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white 
              font-semibold rounded-full shadow-md
              transition-all duration-300 ease-in-out
             hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
              cursor-pointer"
            >
              <FiDownload className="h-5 w-5" />
              <span>Certificate</span>
            </a>
          </button>
        ) : (
          <button className=" md:flex md:justify-center md:items-center  px-2 py-2 rounded-full  transition-all duration-300 cursor-pointer">
            <a
              href="#contact" 
              onClick={()=>redirectToContact()}
              className=" 
              inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white 
              font-semibold rounded-full shadow-md
              transition-all duration-300 ease-in-out
             hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
              cursor-pointer"
            >
              <FiDownload className="h-5 w-5" />
              <span>Certificate</span>
            </a>
          </button>
        )}
      </motion.div>
    </motion.section>
  );
}

export default Experience;
