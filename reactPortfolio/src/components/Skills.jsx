import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

import html from "../assets/HTML.png";
import css from "../assets/CSS.png";
import js from "../assets/Javascript.svg";
import react from "../assets/React.png";
import git from "../assets/Git.svg";
import github from "../assets/Github.svg";
import tailwind from "../assets/Tailwind.png";
import java from "../assets/java.png";
import mySql from "../assets/mySql.png";
import springBoot from "../assets/springBoot.png";

export default function SkillsSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const skills = [
    { img: html, name: "HTML" },
    { img: css, name: "CSS" },
    { img: js, name: "JavaScript" },
    { img: tailwind, name: "Tailwind" },
    { img: react, name: "React" },
    { img: java, name: "Java" },
    { img: springBoot, name: "Spring Boot" },
    { img: mySql, name: "MySQL" },
    { img: git, name: "Git" },
    { img: github, name: "Github" },
  ];

  return (
    <section id="skills" className="py-16  px-4 bg-gradient-to-b  text-white">
      <div>
        <h2 className="text-4xl font-extrabold text-center mb-12 underline text-black">
          My Tech Stack
        </h2>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="group flex flex-col items-center justify-center bg-[white] p-5 rounded-2xl shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-blue-600"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-20 h-20 object-contain mb-2 transition-transform duration-300 group-hover:rotate-30"
              />
              <p className="text-sm font-medium text-black">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
