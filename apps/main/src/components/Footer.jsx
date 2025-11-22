import React from 'react';
import { resumeData } from '@portfolio/data';

const Footer = () => {
  return (
    <footer style={{ 
      padding: '2rem', 
      textAlign: 'center', 
      color: 'var(--text-secondary)', 
      fontSize: '0.9rem',
      borderTop: '1px solid var(--surface)'
    }}>
      <p>Designed & Built by {resumeData.name}</p>
      <p style={{ marginTop: '0.5rem' }}>&copy; {new Date().getFullYear()} All rights reserved.</p>
    </footer>
  );
};

export default Footer;
