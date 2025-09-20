import React from "react";

import Brief from "./components/Brief";
import About from "./components/About";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Skills from "./components/Skills";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Header */}
 <NavBar/>

      <Brief />

      {/* About Section */}
      <About />

      <Education/>

      <Skills/>

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />

    </div>
  );
};

export default App;
