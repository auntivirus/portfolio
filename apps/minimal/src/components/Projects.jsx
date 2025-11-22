import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '@portfolio/data';

const Projects = () => {
  return (
    <section id="projects">
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
          04. Projects
        </h6>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
          {resumeData.projects.map((project, index) => (
            <div 
              key={index}
              style={{ 
                border: '1px solid var(--border)', 
                padding: '2rem',
                transition: 'all 0.3s ease',
                backgroundColor: 'var(--bg-color)'
              }}
              className="project-card"
            >
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{project.name}</h3>
              <p style={{ 
                fontSize: '0.85rem', 
                color: 'var(--text-secondary)', 
                marginBottom: '1.5rem',
                fontFamily: 'monospace'
              }}>
                {project.tech}
              </p>
              <ul style={{ listStyle: 'none', fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                {project.details.map((detail, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem' }}>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
      <style>{`
        .project-card:hover {
          border-color: var(--text-primary);
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
};

export default Projects;
