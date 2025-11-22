import React from 'react';
import { resumeData } from '@portfolio/data';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" style={{ padding: '6rem 2rem' }}>
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
          <span className="text-gradient">Work Experience</span>
        </h2>
        <p style={{ 
          textAlign: 'center', 
          color: 'var(--text-secondary)', 
          marginBottom: '4rem',
          fontSize: '1.2rem'
        }}>
          My professional journey
        </p>

        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute',
            left: '20px',
            top: '0',
            bottom: '0',
            width: '2px',
            background: 'linear-gradient(180deg, var(--accent-primary), var(--accent-secondary))',
            opacity: 0.5
          }} />

          {resumeData.experience.map((exp, index) => (
            <motion.div
              key={index}
              className="glass-card"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              style={{
                padding: '2rem',
                marginBottom: '2rem',
                marginLeft: '50px',
                position: 'relative'
              }}
            >
              {/* Timeline node */}
              <div style={{
                position: 'absolute',
                left: '-46px',
                top: '2rem',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                boxShadow: '0 0 20px rgba(121, 40, 202, 0.8)',
                border: '3px solid var(--bg-primary)'
              }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', fontWeight: 700 }}>
                  {exp.role}
                </h3>
                <span style={{ 
                  color: 'var(--accent-tertiary)', 
                  fontWeight: 600,
                  fontSize: '1rem'
                }}>
                  {exp.period}
                </span>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>{exp.company}</span>
                <span>{exp.location}</span>
              </div>
              
              <ul style={{ 
                listStyle: 'none', 
                padding: 0,
                color: 'var(--text-secondary)',
                lineHeight: 1.8
              }}>
                {exp.achievements.map((achievement, i) => (
                  <li key={i} style={{ 
                    marginBottom: '0.8rem',
                    paddingLeft: '1.5rem',
                    position: 'relative'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: 0,
                      color: 'var(--accent-primary)',
                      fontWeight: 'bold'
                    }}>▸</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
