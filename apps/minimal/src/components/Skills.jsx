import React from "react";
import { resumeData } from "@portfolio/data";

const Skills = () => {
  // Flatten all skills into a single list
  const allSkills = [
    ...resumeData.skills.languages,
    ...resumeData.skills.backend,
    ...resumeData.skills.frontend,
    ...resumeData.skills.database,
    ...resumeData.skills.devops,
    ...resumeData.skills.tools,
  ];

  return (
    <section id="skills">
      <h6
        style={{
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: "var(--text-secondary)",
          marginBottom: "3rem",
          fontSize: "0.8rem",
          fontFamily: "Space Mono, monospace",
        }}
      >
        03. SKILLS
      </h6>

      {/* Single column list - ultra minimal */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: "1rem",
        }}
      >
        {allSkills.map((skill, index) => (
          <div
            key={index}
            style={{
              padding: "1rem 1.5rem",
              fontFamily: "Space Mono, monospace",
              fontSize: "0.9rem",
              color: "var(--text-primary)",
              transition: "all 0.2s ease",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "var(--accent)";
              e.target.style.color = "var(--bg-color)";
              e.target.style.transform = "translate(-2px, -2px)";
              e.target.style.boxShadow = "2px 2px 0 var(--text-primary)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "var(--text-primary)";
              e.target.style.transform = "translate(0, 0)";
              e.target.style.boxShadow = "none";
            }}
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
