import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/Hyper-RP",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/rohit-patil-hyperrp",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/_rohit_21.8",
    },
    // {
    //   name: "YouTube",
    //   icon: <FaYoutube />,
    //   link: "https://www.youtube.com/your-youtube-channel",
    // },
  ];

  const navLinks = [
    { name: "Home", link: "#hero" },
    { name: "Skills", link: "#skills" },
    { name: "Experience", link: "#experience" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <footer className="bg-gray-100  pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <h3 className="text-2xl text-[#00000060] font-bold mb-4">
              Rohit Patil
            </h3>
            <p className="text-gray-400">
              Creative & Detail-Oriented Software Developer dedicated to design
              intuitive, fast, and engaging web solutions
            </p>
          </div>
          <div className="col-span-1">
            <h3 className="text-xl font-semibold text-[#00000060] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.link}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-xl font-semibold text-[#00000060] mb-4">
              Connect With Me
            </h3>
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-400 hover:text-white"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <div className="mt-8 text-center md:text-start text-gray-500">
              <p>
                &copy; {new Date().getFullYear()} Rohit Patil. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          {/* <a href="#contact" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 cursor-pointer">
            Contact Me
          </a> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
