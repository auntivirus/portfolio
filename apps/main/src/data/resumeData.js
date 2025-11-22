import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export const resumeData = {
  name: "Smit Joshi",
  title: "Full-stack Software Engineer",
  contact: {
    phone: "+91 9833-516-164",
    email: "smitgirishjoshi@gmail.com",
    linkedin: "https://linkedin.com/in/smit-joshi-/",
    social: [
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/smit-joshi-/",
        icon: FaLinkedin,
      },
      {
        name: "Email",
        url: "mailto:smitgirishjoshi@gmail.com",
        icon: FaEnvelope,
      },
    ],
  },
  summary:
    "Full-stack Software Engineer with 2+ years of hands-on experience in developing scalable, microservice-based web and mobile applications using Java, Spring Boot, React.js, and Flutter. Proven record in API integration, performance optimization, and writing maintainable code. Strong problem solver with agile team experience, known for clean code and debugging skills.",
  education: [
    {
      institution: "Fr. Conceicao Rodrigues College Of Engineering, Mumbai",
      degree: "Bachelor of Engineering in Electronics",
      year: "2017 - 2021",
      grade: "7.4 CGPA",
    },
  ],
  experience: [
    {
      role: "Software Developer",
      company: "OpenSpace Services Pvt. Ltd.",
      location: "Mumbai",
      period: "02/2023 – Present",
      achievements: [
        "Engineered RESTful APIs and integrated external APIs using React, improving usability.",
        "Led development using Java, Spring Boot, and React.js in agile sprints, reducing time to delivery by 25%.",
        "Implemented microservice architecture using Spring Cloud stack (Eureka, Gateway, Config, etc.).",
        "Built internal tools in React.js and Flutter to streamline module delivery.",
        "Improved CI/CD processes and reduced deployment time by up to 50%.",
      ],
    },
    {
      role: "Intern",
      company: "La Esfera Multiservices LLP",
      location: "Mumbai",
      period: "07/2022 – 10/2022",
      achievements: [
        "Assisted in frontend development using Angular and backend with Java.",
        "Shadowed senior developers to learn end-to-end SDLC, BRD to FRS/SRS.",
      ],
    },
  ],
  skills: {
    languages: ["Java", "JavaScript", "TypeScript", "Go", "Dart"],
    backend: ["Spring Boot", "Spring Cloud", "JPA", "Microservices"],
    frontend: ["React", "Angular", "Flutter"],
    database: ["PostgreSQL", "MySQL"],
    testing: ["JUnit", "Mockito"],
    devops: ["Docker", "AWS", "Linux", "Maven", "Gradle"],
    tools: ["Jira", "Slack", "Postman", "Swagger"],
    versionControl: ["GitLab", "GitHub", "Bitbucket"],
    ide: ["IntelliJ", "VSCode", "Eclipse", "DBeaver", "pgAdmin"],
  },
  projects: [
    {
      name: "PlayMo Technologies",
      tech: "Spring Boot, React",
      details: [
        "Developed a platform for sports academies with attendance, performance reports, and feedback.",
        "Implemented multi-player login with parent-player switching logic.",
        "Built live score streaming and post-match analytics modules.",
      ],
    },
    {
      name: "Ansell AMAT",
      tech: "Spring Cloud (Gateway, Security)",
      details: [
        "Designed Spring Boot Gateway with dynamic routing and strong endpoint security.",
        "Enabled dynamic client addition without backend restarts.",
      ],
    },
    {
      name: "Nigerian National Petroleum Corporation (NNPC)",
      tech: "Spring Cloud, React, Docker",
      details: [
        "Led React and Spring Boot-based development.",
        "Used Spring Cloud stack for modularity and improved deployment via Docker.",
      ],
    },
    {
      name: "Razorpay",
      tech: "Angular, Progressive Web Apps (PWA)",
      details: [
        "Built responsive, mobile-first PWAs.",
        "Improved performance and mobile responsiveness.",
      ],
    },
    {
      name: "Raidesh Application",
      tech: "Flutter",
      details: [
        "Rebuilt a web app in Flutter as a POC.",
        "Ensured UI consistency and cross-platform support.",
      ],
    },
    {
      name: "ACME ERP",
      tech: "Spring Boot, React",
      details: ["Fixed bugs, improved performance, and added new features."],
    },
    {
      name: "Ansell Intelliforz & UPI",
      tech: "Spring Boot, JUnit, Mockito",
      details: ["Automated backend testing using JUnit and Mockito."],
    },
  ],
  certificates: [
    {
      name: "Full Stack Development Certification Course",
      issuer: "ITVedant Institute",
      description: "A full-stack development certification course.",
    },
  ],
  languagesSpoken: ["English", "Hindi", "Gujarati", "Marathi", "French"],
};
