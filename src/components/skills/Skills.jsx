import React from "react";
import "./skills.css";

const skillCategories = [
  {
    title: "CSV, Quality Assurance & Compliance",
    badge: "Core Expertise",
    icon: "uil-shield-check",
    skills: [
      "Computerized System Validation (CSV)",
      "URS Review & Traceability",
      "IQ / OQ / PQ Protocol Execution",
      "User Acceptance Testing (UAT)",
      "Functional Testing & Test Scenarios",
      "Risk & Impact Assessment",
      "Data Integrity & ALCOA+",
      "Good Documentation Practice (GDP)",
      "GMP Compliance & Audit Evidence",
      "User Access Management",
      "System Lifecycle Management (SLCM)",
      "Change Control & Periodic Review"
    ]
  },
  {
    title: "Software Engineering & Web Development",
    badge: "Full-Stack",
    icon: "uil-brackets-curly",
    skills: [
      "Laravel Framework",
      "React.js",
      "PHP (Modern & Native)",
      "Filament Admin Panels",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "JavaScript (ES6+)",
      "HTML5 & Semantic CSS",
      "RESTful API Integration",
      "Git & GitHub Version Control",
      "TortoiseSVN"
    ]
  },
  {
    title: "Databases, Analytics & Reporting",
    badge: "Data Systems",
    icon: "uil-database",
    skills: [
      "SQL Query Writing & Optimization",
      "MySQL Relational Architecture",
      "DBeaver Database Administration",
      "Looker Studio CSV Dashboards",
      "Python Data Processing",
      "Normalized Schema Design",
      "Microsoft Excel (Data Models)"
    ]
  },
  {
    title: "Methodologies, Design & Workflows",
    badge: "Processes & Tools",
    icon: "uil-sitemap",
    skills: [
      "Software Development Life Cycle (SDLC)",
      "Agile & Iterative Workflows",
      "Requirements Gathering & Mapping",
      "Business Process Flowcharts (Draw.io)",
      "Figma UI/UX Prototyping",
      "Laragon Local Environment",
      "Canva & Adobe Illustrator",
      "Cross-Functional Collaboration"
    ]
  }
];

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <div className="skills__container container">
        {/* Section Header */}
        <div className="section__header">
          <span className="section__badge">04. Capabilities</span>
          <h2 className="section__title">Skills & Technical Expertise</h2>
          <p className="section__description">
            Validated technical competencies across quality compliance, full-stack architecture, relational data, and system analysis.
          </p>
        </div>

        {/* Skills Category Grid */}
        <div className="skills__grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skills__card card">
              <div className="skills__card-header">
                <div className="skills__icon-box">
                  <i className={`uil ${category.icon}`}></i>
                </div>
                <div className="skills__card-title-group">
                  <span className="tag tag--accent">{category.badge}</span>
                  <h3 className="skills__card-title">{category.title}</h3>
                </div>
              </div>

              <div className="skills__items">
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skills__pill">
                    <span className="skills__pill-dot"></span>
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
