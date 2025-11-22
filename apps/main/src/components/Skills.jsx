import React from 'react';
import { resumeData } from '@portfolio/data';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    { title: 'Languages', skills: resumeData.skills.languages, color: 'var(--accent-primary)' },
    { title: 'Backend', skills: resumeData.skills.backend, color: 'var(--accent-secondary)' },
    { title: 'Frontend', skills: resumeData.skills.frontend, color: 'var(--accent-tertiary)' },
    { title: 'Database', skills: resumeData.skills.database, color: 'var(--accent-primary)' },
    { title: 'DevOps', skills: resumeData.skills.devops, color: 'var(--accent-secondary)' },
    { title: 'Tools', skills: resumeData.skills.tools, color: 'var(--accent-tertiary)' },
  ];

  return (
    <section id="skills" style={{ padding: '6rem 2rem', background: 'var(--bg-secondary)' }}>
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
          <span className="text-gradient-cyan">Technical Arsenal</span>
        </h2>
        <p style={{ 
          textAlign: 'center', 
          color: 'var(--text-secondary)', 
          marginBottom: '4rem',
          fontSize: '1.2rem'
        }}>
          Technologies I work with
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="glass-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              style={{ padding: '2rem' }}
            >
              <h3 style={{ 
                fontSize: '1.3rem', 
                marginBottom: '1.5rem',
                color: category.color,
                fontWeight: 700
              }}>
                {category.title}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    style={{
                      padding: '0.5rem 1rem',
                      background: 'var(--bg-primary)',
                      border: `1px solid ${category.color}`,
                      borderRadius: '8px',
                      fontSize: '0.9rem',
                      color: 'var(--text-primary)',
                      fontWeight: 500,
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = category.color;
                      e.target.style.color = '#000';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'var(--bg-primary)';
                      e.target.style.color = 'var(--text-primary)';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
