import React from "react";
import Header from "./Header";
import Contact from "./Contact";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Clients from "./Clients";
import "../styles/index.css";
import ParticlesBackground from "./ParticlesBackground";

const App = () => {
  return (
    <div className="overflow-x-hidden font-body">
      <ParticlesBackground/>
      <Header />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Clients />
      <Contact />
    </div>
  );
};

export default App;
