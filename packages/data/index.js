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
    "Results-driven Full-Stack Software Engineer with expertise in building high-performance, scalable microservices and responsive web/mobile applications. Proficient in the Java ecosystem (Spring Boot, Cloud), React.js, and Flutter, with a strong focus on system architecture and API design. Proven track record of reducing delivery times by 25% through agile leadership and optimizing deployment pipelines. Passionate about writing clean, maintainable code and solving complex engineering challenges to drive business value.",
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
        "Architected and deployed high-performance RESTful APIs using React and Spring Boot, significantly enhancing system scalability and user experience.",
        "Spearheaded agile development cycles, optimizing workflows to reduce feature delivery time by 25%.",
        "Engineered a robust microservice architecture utilizing the Spring Cloud ecosystem (Eureka, Gateway, Config), ensuring high availability and fault tolerance.",
        "Developed critical internal tools in React.js and Flutter, streamlining module delivery and operational efficiency.",
        "Revolutionized CI/CD pipelines, slashing deployment times by up to 50% and minimizing production downtime.",
      ],
    },
    {
      role: "Intern",
      company: "La Esfera Multiservices LLP",
      location: "Mumbai",
      period: "07/2022 – 10/2022",
      achievements: [
        "Contributed to full-stack development initiatives, leveraging Angular for responsive frontends and Java for robust backends.",
        "Gained comprehensive expertise in the full SDLC, translating complex Business Requirement Documents (BRD) into precise technical specifications.",
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
        "Architected a comprehensive management platform for sports academies, featuring automated attendance tracking and detailed performance analytics.",
        "Engineered a secure, multi-role authentication system enabling seamless parent-player account switching.",
        "Developed a real-time live score streaming module and post-match analytics engine, driving user engagement.",
      ],
      links: [
        { name: "Website", url: "https://playmotech.com/" },
        {
          name: "Case Study",
          url: "https://openspaceservices.com/casestudy/playmo",
        },
        {
          name: "Play Store",
          url: "https://play.google.com/store/apps/details?id=com.playmotech.letsrally",
        },
        {
          name: "App Store",
          url: "https://apps.apple.com/au/app/athletiq-own-your-game/id6740634277",
        },
      ],
    },
    {
      name: "Ansell AMAT",
      tech: "Spring Cloud (Gateway, Security)",
      details: [
        "Designed a resilient Spring Boot API Gateway with dynamic routing capabilities and fortified endpoint security.",
        "Implemented a zero-downtime architecture allowing dynamic client onboarding without backend restarts.",
      ],
    },
    {
      name: "Nigerian National Petroleum Corporation (NNPC)",
      tech: "Spring Cloud, React, Docker",
      details: [
        "Spearheaded the full-stack development of a mission-critical enterprise application using React and Spring Boot.",
        "Leveraged Spring Cloud and Docker to create a modular, containerized environment, simplifying deployment and scaling.",
      ],
      links: [
        {
          name: "Play Store",
          url: "https://play.google.com/store/apps/details?id=com.nnpc",
        },
        {
          name: "Case Study",
          url: "https://www.openspaceservices.com/casestudy/nnpc",
        },
      ],
    },
    {
      name: "Razorpay",
      tech: "Angular, Progressive Web Apps (PWA)",
      details: [
        "Delivered high-performance, mobile-first Progressive Web Apps (PWAs) ensuring seamless cross-device compatibility.",
        "Optimized application rendering and responsiveness, significantly improving mobile user retention.",
      ],
    },
    {
      name: "Raidesh Application",
      tech: "Flutter",
      details: [
        "Modernized a legacy web application by rebuilding it as a high-performance Flutter mobile app (POC).",
        "Achieved 100% UI consistency and codebase reusability across platforms.",
      ],
    },
    {
      name: "ACME ERP",
      tech: "Spring Boot, React",
      details: [
        "Resolved critical system bugs and optimized database queries, resulting in a measurable boost in application performance.",
      ],
    },
    {
      name: "Ansell Intelliforz & UPI",
      tech: "Spring Boot, JUnit, Mockito",
      details: [
        "Established a comprehensive automated testing suite using JUnit and Mockito, ensuring code reliability and reducing regression bugs.",
      ],
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
