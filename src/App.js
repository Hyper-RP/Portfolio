import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles.css";
import "tailwindcss/tailwind.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";


function App() {
    useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return(    
  <>
    <div id="wrapper" className="min-h-screen w-full overflow-x-hidden overflow-y-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" >
        <Header />
        <Hero />
        <Skills />
        <Experience/>
        <Projects />
        <Contact />
      </div>
    </div>
    </>
  );
}

export default App;
