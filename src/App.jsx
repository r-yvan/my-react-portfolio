import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

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
