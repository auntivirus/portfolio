import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '@portfolio/data';

const About = () => {
  return (
    <section id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h6 style={{ 
          textTransform: 'uppercase', 
          letterSpacing: '0.1em', 
          color: 'var(--text-secondary)', 
          marginBottom: '2rem',
          fontSize: '0.8rem'
        }}>
          01. About
        </h6>
        <div style={{ fontSize: '1.2rem', maxWidth: '700px', lineHeight: 1.8 }}>
          <p style={{ marginBottom: '1.5rem' }}>
            {resumeData.summary}
          </p>
          <p>
            I believe in the power of clean code and thoughtful design. My approach is user-centric, 
            focusing on performance and accessibility to create seamless digital experiences.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
