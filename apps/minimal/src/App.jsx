import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

import { ThemeProvider, Cursor } from '@portfolio/shared';
import { Element } from 'react-scroll';

function App() {
  return (
    <ThemeProvider>
      <Cursor variant="minimal" />
      <div className="grid-bg" />
      <Layout>
        <Element name="hero"><Hero /></Element>
        <Element name="about"><About /></Element>
        <Element name="experience"><Experience /></Element>
        <Element name="skills"><Skills /></Element>
        <Element name="projects"><Projects /></Element>
        <Element name="contact"><Contact /></Element>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
