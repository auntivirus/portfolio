import React from "react";
import { motion } from "framer-motion";
import { resumeData } from "@portfolio/data";

const Projects = () => {
  return (
    <section id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h6
          style={{
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "var(--text-secondary)",
            marginBottom: "3rem",
            fontSize: "0.8rem",
          }}
        >
          04. Projects
        </h6>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {resumeData.projects.map((project, index) => (
            <div
              key={index}
              style={{
                border: "1px solid var(--border)",
                padding: "2rem",
                transition: "all 0.3s ease",
                backgroundColor: "var(--bg-color)",
              }}
              className="project-card"
            >
              <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
                {project.name}
              </h3>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--text-secondary)",
                  marginBottom: "1.5rem",
                  fontFamily: "monospace",
                }}
              >
                {project.tech}
              </p>
              <ul
                style={{
                  listStyle: "none",
                  fontSize: "0.95rem",
                  color: "var(--text-primary)",
                }}
              >
                {project.details.map((detail, i) => (
                  <li key={i} style={{ marginBottom: "0.5rem" }}>
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
                        background: "var(--accent)",
                        color: "var(--bg-color)",
                        border: "2px solid var(--text-primary)",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        textDecoration: "none",
                        fontFamily: "Space Mono, monospace",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        transition: "all 0.2s ease",
                        display: "inline-block",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = "translate(-2px, -2px)";
                        e.target.style.boxShadow =
                          "2px 2px 0 var(--text-primary)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = "translate(0, 0)";
                        e.target.style.boxShadow = "none";
                      }}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
      <style>{`
        .project-card:hover {
          border-color: var(--text-primary);
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
};

export default Projects;
