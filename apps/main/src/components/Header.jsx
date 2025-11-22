import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Education', to: 'education' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
      }`}
      style={{ 
        backgroundColor: scrolled ? 'var(--nav-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        padding: scrolled ? '1rem 2rem' : '1.5rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        position: 'fixed',
        top: 0,
        zIndex: 1000,
        boxShadow: scrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none'
      }}
    >
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="logo" 
        style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)' }}
      >
        <Link to="hero" smooth={true} duration={500} className="cursor-pointer">
          SJ.
        </Link>
      </motion.div>

      {/* Desktop Nav */}
      <nav style={{ display: 'none' }} className="desktop-nav">
        <ul style={{ display: 'flex', gap: '2rem' }}>
          {navLinks.map((link, index) => (
            <motion.li 
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
            >
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                style={{ cursor: 'pointer', color: 'var(--text-secondary)' }}
                activeClass="active"
                spy={true}
                onSetActive={() => {}}
                className="nav-link"
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Mobile Nav Toggle */}
      <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer', fontSize: '1.5rem' }}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            backgroundColor: 'var(--surface)',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.5rem',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setIsOpen(false)}
              style={{ cursor: 'pointer', color: 'var(--text-primary)', fontSize: '1.1rem' }}
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
      
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: block !important; }
          .mobile-toggle { display: none !important; }
        }
        .nav-link:hover { color: var(--primary) !important; }
        .active { color: var(--primary) !important; }
      `}</style>
    </motion.header>
  );
};

export default Header;
