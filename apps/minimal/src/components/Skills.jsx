import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '@portfolio/data';

const Skills = () => {
  const skillCategories = Object.entries(resumeData.skills);

  return (
    <section id="skills">
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
          03. Skills
        </h6>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
          {skillCategories.map(([category, skills], index) => (
            <div key={index}>
              <h4 style={{ 
                textTransform: 'capitalize', 
                marginBottom: '1rem', 
                fontSize: '1rem',
                borderBottom: '1px solid var(--border)',
                paddingBottom: '0.5rem'
              }}>
                {category.replace(/([A-Z])/g, ' $1').trim()}
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {skills.map((skill, i) => (
                  <li key={i} style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
