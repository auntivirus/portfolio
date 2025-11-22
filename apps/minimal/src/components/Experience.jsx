import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '@portfolio/data';

const Experience = () => {
  return (
    <section id="experience">
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
          marginBottom: '3rem',
          fontSize: '0.8rem'
        }}>
          02. Experience
        </h6>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {resumeData.experience.map((exp, index) => (
            <div key={index} style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '2rem' }} className="experience-item">
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                {exp.period}
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{exp.role}</h3>
                <div style={{ marginBottom: '1rem', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                  {exp.company} — {exp.location}
                </div>
                <ul style={{ listStyle: 'none' }}>
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1rem' }}>
                      <span style={{ position: 'absolute', left: 0, top: '0.6em', width: '4px', height: '4px', backgroundColor: 'var(--text-primary)', borderRadius: '50%' }}></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <style>{`
        @media (max-width: 768px) {
          .experience-item { grid-template-columns: 1fr !important; gap: 0.5rem !important; }
        }
      `}</style>
    </section>
  );
};

export default Experience;
