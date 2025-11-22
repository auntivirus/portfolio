import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'var(--bg)',
      color: 'var(--text)',
      gap: '1.5rem'
    }}>
      <motion.div
        style={{
          width: '50px',
          height: '50px',
          border: '4px solid var(--surface)',
          borderTop: '4px solid var(--primary)',
          borderRadius: '50%'
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        style={{ fontSize: '1.2rem', fontWeight: 500, letterSpacing: '0.05em' }}
      >
        LOADING
      </motion.h2>
    </div>
  );
};

export default Loader;
