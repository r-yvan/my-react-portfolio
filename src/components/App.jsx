import React from "react";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import "../styles/index.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default App;
