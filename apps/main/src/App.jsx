import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { ThemeProvider, Cursor } from '@portfolio/shared';

function App() {
  return (
    <ThemeProvider>
      <Cursor variant="glow" />
      <div className="mesh-bg" />
      <div className="app">
        <Header />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
