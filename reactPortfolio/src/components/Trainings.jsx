import React, { useContext } from "react";
import { motion } from "framer-motion";
import { portfolioContext } from "../Context/Portfolio";
import { FiDownload } from "react-icons/fi";
function Trainings() {
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
        Training
      </motion.h2>

      {/*TNSIF Training */}
      <motion.div
        className="bg-white shadow-xl rounded-xl px-8 py-4 max-w-4xl mx-auto border-l-4 border-[#c731b38e]"
        variants={fadeUp}
      >
        <motion.h3 className="text-2xl font-semibold mb-2" variants={fadeUp}>
          TNS India Foundation
        </motion.h3>
        <motion.p className="text-gray-500 text-sm mb-4" variants={fadeUp}>
          At Matoshri College Of Engineering · February 2024 – April 2024 ·
          Nashik, Maharashtra
        </motion.p>
        <motion.ul
          className="list-disc list-inside text-gray-700 space-y-2"
          variants={stagger}
        >
          <motion.li variants={fadeUp}>
            Gained proficiency in backend development using the Java ecosystem,
            including Core Java 8, Spring Boot, and Hibernate with
            JPA for building robust, enterprise-level applications.
          </motion.li>
          <motion.li variants={fadeUp}>
            Acquired foundational front-end web development skills in HTML, CSS,
            and JavaScript, complemented by teamwork in a technical
            environment.
          </motion.li>
        </motion.ul>
        {downloadPermission ? (
          <button className=" px-2 py-2 rounded-full  transition-all duration-300 cursor-pointer">
            <a
              href="TNSIFcertificate.pdf"
              download="TNSIFcertificate.pdf"
              className=" 
                      inline-flex items-center gap-2 px-4 py-2 bg-[#c731b38e] text-white 
                      font-semibold rounded-full shadow-md
                      transition-all duration-300 ease-in-out
                     hover:bg-[#c731b38e] hover:shadow-lg hover:-translate-y-1
                      focus:outline-none focus:ring-2 focus:ring-[#c731b38e] focus:ring-opacity-50
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
                      inline-flex items-center gap-2 px-4 py-2 bg-[#c731b38e] text-white 
                      font-semibold rounded-full shadow-md
                      transition-all duration-300 ease-in-out
                     hover:bg-[#c731b38e] hover:shadow-lg hover:-translate-y-1
                      focus:outline-none focus:ring-2 focus:ring-[#c731b38e] focus:ring-opacity-50
                      cursor-pointer"
            >
              <FiDownload className="h-5 w-5" />
              <span>Certificate</span>
            </a>
          </button>
        )}
      </motion.div>

      {/* MCOERC Training*/}
      <motion.div
        className="bg-white shadow-xl rounded-xl my-[1rem] px-8 py-4 max-w-4xl mx-auto border-l-4 border-[#f00b0b8a] mb-10"
        variants={fadeUp}
      >
        <motion.h3 className="text-2xl font-semibold mb-2" variants={fadeUp}>
          Matoshri College Of Engineering
        </motion.h3>
        <motion.p className="text-gray-500 text-sm mb-4" variants={fadeUp}>
          · February 2023 – February 2023 · Nashik, Maharashtra
        </motion.p>
        <motion.ul
          className="list-disc list-inside text-gray-700 space-y-2"
          variants={stagger}
        >
          <motion.li variants={fadeUp}>
            Completed an intensive, One-week short-term training program focused
            exclusively on Core Java Programming fundamentals.
          </motion.li>
          <motion.li variants={fadeUp}>
            Received hands-on training and industry insights from{" "}
            <a
              href="https://www.linkedin.com/in/vasim-pathan-87bb302a/"
              target="_blank"
            >
              <b>
                <u>Mr. V. A. Pathan</u>
              </b>
            </a>{" "}
            , a Senior Developer at <b>Webmd India Private Limited</b>.
          </motion.li>
        </motion.ul>
        {downloadPermission ? (
          <button className="  px-2 py-2 rounded-full  transition-all duration-300 cursor-pointer">
            <a
              href="coreJavaCertificate.pdf"
              download="coreJavaCertificate.pdf"
              className=" 
              inline-flex items-center gap-2 px-4 py-2 bg-[#f00b0b8a] text-white 
              font-semibold rounded-full shadow-md
              transition-all duration-300 ease-in-out
             hover:bg-[#f00b0b8a] hover:shadow-lg hover:-translate-y-1
              focus:outline-none focus:ring-2 focus:ring-[#f00b0b8a] focus:ring-opacity-50
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
              inline-flex items-center gap-2 px-4 py-2 bg-[#f00b0b8a] text-white 
              font-semibold rounded-full shadow-md
              transition-all duration-300 ease-in-out
             hover:bg-[#f00b0b8a] hover:shadow-lg hover:-translate-y-1
              focus:outline-none focus:ring-2 focus:ring-[#f00b0b8a] focus:ring-opacity-50
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

export default Trainings;
