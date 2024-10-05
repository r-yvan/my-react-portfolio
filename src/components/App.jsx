import React from "react";
import Header from "./Header";
import Contact from "./Contact";
import "../styles/index.css";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Clients from "./Clients";

const App = () => {
  return (
    <div className="App">
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
