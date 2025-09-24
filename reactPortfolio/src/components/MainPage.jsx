import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Experience from "./Experience";
import Footer from "./Footer";
import Trainings from "./Trainings";

const MainPage = () => {
  return (
    <div id="wrapper" className="min-h-screen w-full overflow-x-hidden overflow-y-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <Hero />
        <Skills />
        <Experience />
        <Trainings/>
        <Projects />
        <Contact />
        <Footer/>
      </div>
    </div>
  );
};

export default MainPage;
