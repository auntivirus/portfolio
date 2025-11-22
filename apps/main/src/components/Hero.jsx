import React from "react";
import { resumeData } from "@portfolio/data";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  const nameLength = resumeData.name.length;

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "0 2rem",
      }}
    >
      {/* Ambient Glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(121, 40, 202, 0.2) 0%, transparent 70%)",
          filter: "blur(80px)",
          zIndex: -1,
        }}
      />

      <div style={{ textAlign: "center", maxWidth: "900px", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              color: "var(--accent-tertiary)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "1rem",
              fontWeight: 600,
            }}
          >
            Hello, I'm
          </h2>

          <h1
            style={{
              fontSize: "clamp(3rem, 8vw, 6rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            <span
              className="text-gradient"
              style={{ display: "inline-block", position: "relative" }}
            >
              {resumeData.name.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.05, delay: 0.5 + index * 0.05 }}
                  style={{ display: "inline-block" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
              {/* Blinking Cursor */}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0, 1, 1, 0, 0] }}
                transition={{
                  duration: 1.2,
                  delay: 0.5 + nameLength * 0.05,
                  repeat: Infinity,
                  repeatDelay: 0,
                  times: [0, 0.4, 0.5, 0.9, 1],
                }}
                style={{
                  display: "inline-block",
                  width: "0.08em",
                  height: "1em",
                  backgroundColor: "currentColor",
                  marginLeft: "0.05em",
                  verticalAlign: "text-bottom",
                }}
              />
            </span>
          </h1>

          <h3
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              color: "var(--text-secondary)",
              marginBottom: "2rem",
              fontWeight: 500,
            }}
          >
            {resumeData.title}
          </h3>
          <p
            style={{
              fontSize: "1.2rem",
              color: "var(--text-secondary)",
              maxWidth: "600px",
              margin: "0 auto 3rem",
              lineHeight: 1.6,
            }}
          >
            Building digital experiences with a focus on performance,
            scalability, and modern aesthetics.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link to="projects" smooth={true} duration={500}>
              <button className="btn-primary">View Work</button>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              <button
                style={{
                  background: "transparent",
                  border: "1px solid var(--text-secondary)",
                  color: "var(--text-primary)",
                  padding: "0.8rem 2rem",
                  borderRadius: "50px",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = "var(--accent-primary)";
                  e.target.style.color = "var(--accent-primary)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = "var(--text-secondary)";
                  e.target.style.color = "var(--text-primary)";
                }}
              >
                Contact Me
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          color: "var(--text-secondary)",
          cursor: "pointer",
        }}
      >
        <Link to="about" smooth={true} duration={500}>
          <FaArrowDown size={24} />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
