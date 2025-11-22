import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = ({ variant = 'minimal' }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    // Hide system cursor
    document.body.style.cursor = 'none';

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      // Restore system cursor
      document.body.style.cursor = 'auto';
    };
  }, []);

  const minimalVariants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
    },
    hover: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1.5,
    }
  };

  const glowVariants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      scale: 1,
    },
    hover: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      scale: 2.5,
    }
  };

  if (variant === 'glow') {
    return (
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          backgroundColor: 'white',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'difference'
        }}
        variants={glowVariants}
        animate={isHovering ? 'hover' : 'default'}
        transition={{ type: 'spring', stiffness: 800, damping: 40 }}
      />
    );
  }

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        border: '2px solid var(--text-primary)',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'difference'
      }}
      variants={minimalVariants}
      animate={isHovering ? 'hover' : 'default'}
      transition={{ type: 'spring', stiffness: 800, damping: 40 }}
    >
      <div style={{
        width: '8px',
        height: '8px',
        backgroundColor: 'var(--text-primary)',
        borderRadius: '50%',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }} />
    </motion.div>
  );
};

export default Cursor;
