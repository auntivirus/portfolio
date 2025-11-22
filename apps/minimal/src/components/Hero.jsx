import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '@portfolio/data';

const Hero = () => {
  return (
    <section style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      textAlign: 'left'
    }}>
      <div style={{ maxWidth: '800px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 style={{ 
            fontSize: 'clamp(3rem, 6vw, 5rem)', 
            fontWeight: '300', 
            marginBottom: '1.5rem',
            lineHeight: 1.1
          }}>
            {resumeData.name}
          </h2>
          <h3 style={{ 
            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', 
            color: 'var(--text-secondary)', 
            fontWeight: '300',
            marginBottom: '2rem' 
          }}>
            {resumeData.title}
          </h3>
          <p style={{ 
            fontSize: '1.1rem', 
            color: 'var(--text-secondary)', 
            maxWidth: '600px', 
            lineHeight: 1.8,
            marginBottom: '3rem'
          }}>
            {resumeData.summary}
          </p>
          
          <a href={`mailto:${resumeData.contact.email}`} style={{ 
            display: 'inline-block',
            borderBottom: '1px solid var(--text-primary)',
            paddingBottom: '2px',
            color: 'var(--text-primary)',
            fontWeight: '500'
          }}>
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
