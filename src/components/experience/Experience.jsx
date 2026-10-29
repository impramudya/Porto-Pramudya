import React from "react";
import "./experience.css";

const experiences = [
  {
    role: "Computerized System Validation Staff",
    company: "PT. Saka Farma Laboratories (Kalbe Consumer Health)",
    dept: "Quality Assurance Department",
    period: "May 2025 – Present",
    type: "Contract",
    isCurrent: true,
    highlights: [
      "Analyzed and reviewed User Requirement Specifications (URS) to ensure traceability, clarity, and full alignment with pharmaceutical operational needs.",
      "Facilitated cross-functional alignment meetings between system users, IT, and external vendors to verify software functionality against business processes.",
      "Prepared and executed end-to-end computerized system validation protocols including IQ, OQ, PQ, and User Acceptance Testing (UAT) with rigorous objective evidence.",
      "Conducted system risk and impact assessments to systematically evaluate operational risks and establish compliant controls.",
      "Governed User Access Requests and engineered an automated CSV monitoring dashboard using Looker Studio for validation status reporting.",
      "Managed System Lifecycle Management (SLCM) activities including change control evaluations, periodic reviews, and system enhancements."
    ],
    tags: ["CSV Validation", "URS", "IQ/OQ/PQ", "UAT", "Risk Assessment", "Looker Studio", "ALCOA+"]
  },
  {
    role: "Fullstack Web Developer",
    company: "Percetakan Uang Republik Indonesia (PERURI - BUMN)",
    dept: "SDMO Department (HR Business Partner & Industrial Relations)",
    period: "Apr 2024 – Jun 2024",
    type: "Internship",
    isCurrent: false,
    highlights: [
      "Developed internal enterprise web applications using the Laravel framework tailored to HR Business Partner & Industrial Relations requirements.",
      "Engineered and maintained normalized relational database structures supporting employee records, disciplinary workflows, and contract tracking.",
      "Conducted comprehensive application testing, troubleshooting, and continuous feature enhancements driven by user feedback."
    ],
    tags: ["Laravel", "PHP", "MySQL", "Database Architecture", "HR Systems"]
  },
  {
    role: "Fullstack Web Developer",
    company: "PT. Inti Ganda Perdana (Astra Otoparts Group)",
    dept: "Planning Production Control (PPC) Department",
    period: "May 2023 – Nov 2023",
    type: "Internship",
    isCurrent: false,
    highlights: [
      "Developed web-based production control and material flow tracking systems (FIFO Trolley) for the shopfloor planning environment.",
      "Created database schemas using DBeaver and MySQL, optimizing inventory query performance and material status updates.",
      "Collaborated closely with manufacturing supervisors and operators to identify operational bottlenecks and deploy web solutions."
    ],
    tags: ["PHP Native", "MySQL", "DBeaver", "PPC Systems", "Bootstrap"]
  },
  {
    role: "Front-End Web Development Specialization",
    company: "Skilvul – Kampus Merdeka (MSIB)",
    dept: "Studi Independen Bersertifikat",
    period: "Aug 2022 – Dec 2022",
    type: "Certified Track",
    isCurrent: false,
    highlights: [
      "Completed intensive software engineering curriculum covering modern JavaScript (ES6+), React.js, responsive layouts, and REST API integration.",
      "Collaborated in agile team sprints to build production-grade web applications, earning the Gold Award distinction."
    ],
    tags: ["React.js", "JavaScript", "REST APIs", "Agile Sprints", "Gold Certification"]
  }
];

const Experience = () => {
  return (
    <section id="trainings" className="section">
      <div className="trainings-header">
        <span className="section-label">Growth & Experience</span>
        <h2 className="section-title">Experience & Trainings</h2>
        <p className="section-desc">
          A structured timeline of industrial engagements, quality assurance roles, and software engineering milestones.
        </p>
      </div>

      <div className="experience-list">
        {experiences.map((exp, idx) => (
          <div key={idx} className="experience-card">
            <div className="experience-header">
              <div className="experience-title-group">
                <div className="experience-role-row">
                  <h3 className="experience-title">{exp.role}</h3>
                  {exp.isCurrent && (
                    <span className="experience-badge-active">Current Role</span>
                  )}
                </div>
                <div className="experience-org">{exp.company}</div>
                <div className="experience-dept">{exp.dept}</div>
              </div>

              <div className="experience-date-badge">
                <i className="uil uil-calendar-alt"></i>
                <span>{exp.period}</span>
              </div>
            </div>

            <ul className="experience-bullets">
              {exp.highlights.map((h, hIdx) => (
                <li key={hIdx} className="experience-bullet-item">
                  <span className="experience-bullet-point"></span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="experience-tags">
              {exp.tags.map((t, tIdx) => (
                <span key={tIdx} className="experience-tag-pill">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
