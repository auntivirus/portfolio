import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '@portfolio/data';

const Contact = () => {
  return (
    <section id="contact" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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
          05. Contact
        </h6>

        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '2rem', maxWidth: '800px' }}>
          Interested in working together? Let's talk.
        </h2>

        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <a 
            href={`mailto:${resumeData.contact.email}`}
            style={{ 
              fontSize: '1.1rem', 
              borderBottom: '1px solid var(--text-primary)', 
              paddingBottom: '2px',
              fontWeight: '500'
            }}
          >
            {resumeData.contact.email}
          </a>
          <a 
            href={resumeData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              fontSize: '1.1rem', 
              borderBottom: '1px solid var(--text-primary)', 
              paddingBottom: '2px',
              fontWeight: '500'
            }}
          >
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
