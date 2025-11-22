import React from "react";
import { resumeData } from "@portfolio/data";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects" style={{ padding: "6rem 2rem" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            marginBottom: "1rem",
            textAlign: "center",
          }}
        >
          <span className="text-gradient">Featured Projects</span>
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "var(--text-secondary)",
            marginBottom: "4rem",
            fontSize: "1.2rem",
          }}
        >
          Building impactful solutions across various domains
        </p>

        {/* Bento Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {resumeData.projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 60px rgba(121, 40, 202, 0.3)",
              }}
              style={{
                padding: "2rem",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Glow effect on hover */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  background:
                    "linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))",
                  opacity: 0.8,
                }}
              />

              <h3
                style={{
                  fontSize: "1.5rem",
                  marginBottom: "1rem",
                  color: "var(--text-primary)",
                  fontWeight: 700,
                }}
              >
                {project.name}
              </h3>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  marginBottom: "1rem",
                }}
              >
                {project.tech.split(", ").map((tech, i) => (
                  <span
                    key={i}
                    style={{
                      padding: "0.3rem 0.8rem",
                      background: "rgba(121, 40, 202, 0.2)",
                      border: "1px solid var(--accent-primary)",
                      borderRadius: "20px",
                      fontSize: "0.85rem",
                      color: "var(--accent-tertiary)",
                      fontWeight: 500,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  color: "var(--text-secondary)",
                  lineHeight: 1.8,
                }}
              >
                {project.details.map((detail, i) => (
                  <li
                    key={i}
                    style={{
                      marginBottom: "0.5rem",
                      paddingLeft: "1.5rem",
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        color: "var(--accent-primary)",
                      }}
                    >
                      ▸
                    </span>
                    {detail}
                  </li>
                ))}
              </ul>

              {/* Project Links */}
              {project.links && project.links.length > 0 && (
                <div
                  style={{
                    display: "flex",
                    gap: "0.8rem",
                    marginTop: "1.5rem",
                    flexWrap: "wrap",
                  }}
                >
                  {project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: "0.5rem 1rem",
                        background:
                          "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                        color: "#ffffff",
                        borderRadius: "6px",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        textDecoration: "none",
                        transition: "transform 0.2s ease, box-shadow 0.2s ease",
                        display: "inline-block",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = "translateY(-2px)";
                        e.target.style.boxShadow =
                          "0 4px 12px rgba(121, 40, 202, 0.4)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = "translateY(0)";
                        e.target.style.boxShadow = "none";
                      }}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
