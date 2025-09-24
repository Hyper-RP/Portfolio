import React, { useContext, useState } from "react";
import "../styles.css";
import Typed from "typed.js";
import { useEffect } from "react";
import { portfolioContext } from "../Context/Portfolio";
import { form } from "framer-motion/client";
import { toast } from "react-toastify";
function Hero() {
  const { downloadPermission, redirectToContact,userName, dialouge, setDialouge, gender } =
    useContext(portfolioContext);
  const { formData } = useContext(portfolioContext);

  const dialougeArr = [
    "Thank you Beautiful",
    "Thank you Gentleman",
    "Thank you",
  ];

  useEffect(() => {
    let type;
    if (downloadPermission) {
      type = new Typed(".role", {
        strings: [
          userName.split(" ")[0].toUpperCase(),
          userName.split(" ")[userName.split(" ").length - 1].toUpperCase(),
        ],
        loop: true,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 1000,
      });
    } else {
      type = new Typed(".role", {
        strings: [
          "Coder",
          "Software Developer",
          "Full Stack Developer",
          "Java Developer",
          "Backend Developer",
        ],
        loop: true,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 1000,
      });
    }

    const timer =setTimeout(()=>{
      setDialougeFun();
    },1000)

    return () => {
      clearTimeout(timer);
      type.destroy();
    };
  }, [formData.name]);

  function setDialougeFun() {
    if (gender === "female") {
      setDialouge(dialougeArr[0]);
    } else if (gender === "male") {
      setDialouge(dialougeArr[1]);
    } else {
      setDialouge(dialougeArr[2]);
    }
  }

  return (
    <>
      <div
        className="hero-section h-full flex flex-col   md:flex-row items-center justify-center gap-9 py-12"
        data-aos="slide-down"
        data-aos-mirror="true"
        data-aos-delay="500"
        data-aos-duration="1500"
      >
        <div className="hero-sction-left max-w-lg text-center md:text-left">
          <div className="hs-left text-3xl italic font-sans font-semibold mb-2 text-indigo-600">
            Design.Develop.Deploy
          </div>

          {!userName ? (
            <div className="hs-left md:w-[80rem] text-xl mb-4" id="hsl-role">
              I am a <span className="role font-bold text-blue-600"></span>
            </div>
          ) : (
            <div className="hs-left md:w-[80rem] text-xl mb-4" id="hsl-role">
              {dialouge} <span className="role font-bold text-blue-600"></span>
            </div>
          )}

          <div className="hs-left text-base mb-6" id="hsl-desc">
            I'm a software developer and this is my portfolio website. Here
            you'll learn about my journey.
          </div>

          <div className="md:ml-12">
            {/* file download name : RohitPatil_Resume.pdf */}
            {downloadPermission ? (
              <a
                className=" inline-block bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all duration-300 cursor-pointer"
                href="RohitPatil_Resume.pdf"
                download="RohitPatil_Resume.pdf"
              >
                Resume
              </a>
            ) : (
              <a
                href="#contact"
                onClick={()=>redirectToContact()}
                className=" inline-block bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all duration-300 cursor-pointer"
              >
                Resume
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
