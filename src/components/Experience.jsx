import React from "react";
import { motion } from "framer-motion";

function Experience() {
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
        className="bg-white shadow-xl rounded-xl p-8 max-w-4xl mx-auto border-l-4 border-green-500"
        variants={fadeUp}
      >
        <motion.h3 className="text-2xl font-semibold mb-2" variants={fadeUp}>
          Software Development Intern
        </motion.h3>
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
            Assisting in the development of simulators for engineering education
            aligned with AICTE model curriculum.
          </motion.li>
          <motion.li variants={fadeUp}>
            Applying open-source technologies to build interactive online
            experiments and tools.
          </motion.li>
        </motion.ul>
      </motion.div>

      {/* NetLeap Internship */}
      <motion.div
        className="bg-white shadow-xl rounded-xl my-[1rem] p-8 max-w-4xl mx-auto border-l-4 border-blue-500 mb-10"
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
            Collaborated with team to deliver the Online Blood Bank project
            within the deadline.
          </motion.li>
          <motion.li variants={fadeUp}>
            Gained hands-on experience in HTML, CSS, and JavaScript for web
            development.
          </motion.li>
          <motion.li variants={fadeUp}>
            Used GitHub for version control and code collaboration.
          </motion.li>
        </motion.ul>
      </motion.div>
    </motion.section>
  );
}

export default Experience;
