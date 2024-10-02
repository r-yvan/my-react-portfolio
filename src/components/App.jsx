import React from "react";
import Header from "./Header";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import "../styles/index.css";
// import Enoent from "./Enoent";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Projects />
      <Testimonials />
      <Contact />
      {/* <Enoent/> */}
    </div>
  );
};

export default App;
