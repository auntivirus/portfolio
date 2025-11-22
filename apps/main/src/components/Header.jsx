import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { ThemeToggle } from "@portfolio/shared";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", to: "about" },
    { name: "Experience", to: "experience" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Education", to: "education" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: scrolled ? "var(--nav-bg)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? "1px solid var(--glass-border)"
            : "1px solid transparent",
          transition: "all 0.3s ease",
          padding: "1.5rem 0",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 3rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Link
              to="hero"
              smooth={true}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              <h1
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  margin: 0,
                }}
              >
                <span className="text-gradient">SJ</span>
              </h1>
            </Link>
          </motion.div>

          {/* Desktop Nav - Centered */}
          <nav className="desktop-nav">
            <ul
              style={{
                display: "flex",
                gap: "3rem",
                alignItems: "center",
                listStyle: "none",
                margin: 0,
                padding: 0,
              }}
            >
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.05, duration: 0.5 }}
                >
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    style={{
                      cursor: "pointer",
                      color: "var(--text-secondary)",
                      fontWeight: 500,
                      fontSize: "0.95rem",
                      position: "relative",
                      transition: "color 0.3s ease",
                      textDecoration: "none",
                    }}
                    activeClass="active"
                    spy={true}
                    className="nav-link"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Right Side - Theme Toggle */}
          <div
            className="desktop-actions"
            style={{ display: "flex", alignItems: "center", gap: "1rem" }}
          >
            <ThemeToggle />
          </div>

          {/* Mobile Nav Toggle */}
          <div
            className="mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            style={{
              cursor: "pointer",
              fontSize: "1.5rem",
              color: "var(--text-primary)",
              display: "none",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <ThemeToggle />
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </motion.header>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="glass-card"
          style={{
            position: "fixed",
            top: "80px",
            left: "1rem",
            right: "1rem",
            zIndex: 999,
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-100}
              onClick={() => setIsOpen(false)}
              style={{
                cursor: "pointer",
                color: "var(--text-primary)",
                fontSize: "1.1rem",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}

      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav { display: block !important; }
          .desktop-actions { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        
        @media (max-width: 1023px) {
          .desktop-nav { display: none !important; }
          .desktop-actions { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
        
        .nav-link {
          position: relative;
          white-space: nowrap;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
          transition: width 0.3s ease;
        }
        
        .nav-link:hover {
          color: var(--text-primary) !important;
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        .active {
          color: var(--accent-primary) !important;
          font-weight: 600;
        }
        
        .active::after {
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default Header;
