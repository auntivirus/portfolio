import React from 'react';
import { resumeData } from '@portfolio/data';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" style={{ padding: '6rem 2rem', background: 'var(--bg-secondary)' }}>
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
          <span className="text-gradient-cyan">Education & Certifications</span>
        </h2>
        
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '3rem',
          maxWidth: '1000px',
          margin: '3rem auto'
        }}>
          {/* Education */}
          <div>
            <h3 style={{ 
              color: 'var(--accent-primary)', 
              marginBottom: '2rem',
              fontSize: '1.8rem',
              fontWeight: 700
            }}>
              Education
            </h3>
            {resumeData.education.map((edu, index) => (
              <motion.div 
                key={index} 
                className="glass-card"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                style={{ padding: '2rem', marginBottom: '1.5rem' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                  <h4 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', fontWeight: 700 }}>
                    {edu.institution}
                  </h4>
                  <span style={{ color: 'var(--accent-tertiary)', fontWeight: 600 }}>{edu.year}</span>
                </div>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.3rem', fontSize: '1.1rem' }}>
                  {edu.degree}
                </p>
                <p style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>{edu.grade}</p>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 style={{ 
              color: 'var(--accent-secondary)', 
              marginBottom: '2rem',
              fontSize: '1.8rem',
              fontWeight: 700
            }}>
              Certifications
            </h3>
            {resumeData.certificates.map((cert, index) => (
              <motion.div 
                key={index} 
                className="glass-card"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                style={{ padding: '2rem', marginBottom: '1.5rem' }}
              >
                <h4 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '0.5rem', fontWeight: 700 }}>
                  {cert.name}
                </h4>
                <p style={{ color: 'var(--accent-secondary)', marginBottom: '0.5rem', fontWeight: 600 }}>
                  {cert.issuer}
                </p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
