import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import NavBar from "./components/NavBar";
import Brief from "./components/Brief";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen scroll-smooth">
      {/* Header */}
      <NavBar />

      {/* Sections */}
      <Brief />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
