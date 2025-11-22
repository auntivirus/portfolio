import React from 'react';
import { resumeData } from '@portfolio/data';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" style={{ padding: '6rem 2rem', background: 'var(--bg-secondary)' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 style={{ 
          fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
          marginBottom: '1rem',
          textAlign: 'center'
        }}>
          <span className="text-gradient-cyan">About Me</span>
        </h2>
        
        <div className="glass-card" style={{ 
          maxWidth: '900px', 
          margin: '3rem auto',
          padding: '3rem'
        }}>
          <p style={{ 
            fontSize: '1.3rem', 
            color: 'var(--text-primary)', 
            marginBottom: '2rem',
            lineHeight: 1.8,
            fontWeight: 500
          }}>
            {resumeData.summary}
          </p>
          <p style={{ 
            fontSize: '1.1rem', 
            color: 'var(--text-secondary)',
            lineHeight: 1.8
          }}>
            I am passionate about building scalable software and creating intuitive user experiences. 
            With a strong foundation in both frontend and backend technologies, I enjoy tackling complex problems 
            and delivering high-quality solutions that make a real impact.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
