import React from "react";
import "../styles.css";
import Typed from "typed.js";
import { useEffect } from "react";
function Hero() {
  useEffect(() => {
    const type = new Typed(".role", {
      strings: [
        "Coder",
        "Software Developer",
        "Full Stack Developer",
        "Java Developer",
        "UI-UX Designer",
        "Backend Developer",
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
    });

    return () => {
      type.destroy();
    };
  }, []);
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
          <div className="hs-left text-3xl font-semibold mb-2" id="hsl-name">
            Hi! Rohit Patil
          </div>
          <div className="hs-left md:w-[80rem] text-xl mb-4" id="hsl-role">
            I am a <span className="role font-bold text-blue-600"></span>
          </div>
          <div className="hs-left text-base mb-6" id="hsl-desc">
            I'm a software developer and this is my portfolio website. Here
            you'll learn about my journey.
          </div>

          <div>
            <div className="hs-left button inline-block bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all duration-300 cursor-pointer">
              <a href="/RohitPatil_resumes.pdf" download="RohitPatil_resume.pdf">
                <button>Resume</button>
              </a>
            </div>

            {/* <div className="hs-left button inline-block bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all duration-300 cursor-pointer">
              Hire me
            </div> */}

            
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
