import React from 'react';
import { resumeData } from '@portfolio/data';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" style={{ padding: '6rem 2rem', textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 style={{ 
          fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
          marginBottom: '1rem'
        }}>
          <span className="text-gradient">Get In Touch</span>
        </h2>
        <p style={{ 
          color: 'var(--text-secondary)', 
          maxWidth: '600px', 
          margin: '0 auto 3rem', 
          fontSize: '1.2rem',
          lineHeight: 1.6
        }}>
          I am currently looking for new opportunities. Whether you have a question or just want to say hi, 
          I'll try my best to get back to you!
        </p>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '2rem', 
          flexWrap: 'wrap',
          marginBottom: '3rem'
        }}>
          {resumeData.contact.social.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a 
                key={index} 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card"
                whileHover={{ scale: 1.05, y: -5 }}
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  gap: '1rem',
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  padding: '2rem',
                  minWidth: '150px',
                  transition: 'all 0.3s ease'
                }}
              >
                <Icon size={48} style={{ color: 'var(--accent-primary)' }} />
                <span style={{ fontWeight: 600 }}>{item.name}</span>
              </motion.a>
            );
          })}
        </div>

        <div>
          <a href={`mailto:${resumeData.contact.email}`}>
            <button className="btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 3rem' }}>
              Say Hello
            </button>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
