import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Experience from "./Experience";

const MainPage = () => {
  return (
    <div id="wrapper" className="min-h-screen w-full overflow-x-hidden overflow-y-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default MainPage;
