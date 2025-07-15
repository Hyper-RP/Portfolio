import React from "react";
import "../styles.css";
import img from "../assets/R-img.jpg";

function Header() {
  return (
    <>
      <header id="hero" className="header  top-0  items-center p-2 z-50 w-full flex justify-around  bg-white shadow">
        <div
          style={{ backgroundImage: `url(${img})`, height: 70 }}
          className=" flex bg-no-repeat bg-contain  items-center justify-center "
          data-aos="slide-right"
          data-aos-duration="1500"
        >
          <div
            className="logo text-2xl font-bold flex items-center justify-center ml-[4.5rem] "
            data-aos="zoom-in-up"
            data-aos-duration="1500"
          >
            ohit
          </div>
        </div>
        <nav className="nav hidden text-[1.2rem] md:flex gap-6 "
            >
          {/* <a
            href="#hero"
            className="nav-link duration-[0.2s]  ease-in transition-all text-[#666363cc] hover:text-[#000000e8] "
          >
            Home
          </a>
           */}
          <a
            href="#skills"
            className="nav-link transition-colors duration-[0.2s] text-[#666363cc] hover:text-[#000000e8]"
          >
            Skills
          </a>
          <a
            href="#experience"
            className="nav-link duration-[0.2s]  ease-in transition-all text-[#666363cc] hover:text-[#000000e8] "
          >
            Experience
          </a>
          <a
            href="#projects"
            className="nav-link transition-colors duration-[0.2s] text-[#666363cc] hover:text-[#000000e8] "
          >
            Projects
          </a>
          <a
            href="#contact"
            className="nav-link transition-colors duration-[0.2s] text-[#666363cc] hover:text-[#000000e8] "
          >
            Contact
          </a>
        </nav>
      </header>
    </>
  );
}

export default Header;
