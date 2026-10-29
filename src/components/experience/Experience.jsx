import React from "react";
import "./experience.css";

const experiences = [
  {
    company: "PT. Saka Farma Laboratories",
    subCompany: "Kalbe Consumer Health",
    role: "Computerized System Validation Staff",
    department: "Quality Assurance Department",
    type: "Contract",
    period: "May 2025 – Present",
    location: "Bekasi, Indonesia",
    isCurrent: true,
    highlights: [
      "Analyzed and reviewed User Requirement Specifications (URS) to ensure requirements were complete, clear, traceable, and aligned with business and operational needs.",
      "Led cross-functional alignment meetings with system users, IT, and external vendors to gather and clarify requirements, map business processes, and verify system functionality.",
      "Prepared and executed end-to-end system validation protocols and testing activities, including IQ, OQ, PQ, and UAT, as well as test scenarios, test cases, and objective evidence documentation.",
      "Performed risk and impact assessments for computerized systems to systematically identify operational risks and establish appropriate controls and testing methodologies.",
      "Managed User Access Request governance for computerized systems and equipment, and engineered a CSV monitoring dashboard using Looker Studio to track validation metrics and compliance reporting.",
      "Supported computerized system lifecycle activities, including change control evaluation, periodic review, validation maintenance, system enhancements, and retirement procedures."
    ],
    tags: ["Computerized System Validation", "URS", "IQ/OQ/PQ", "UAT", "Risk Assessment", "Looker Studio", "Data Integrity", "GMP / GDP"]
  },
  {
    company: "Percetakan Uang Republik Indonesia",
    subCompany: "PERURI - BUMN",
    role: "Fullstack Web Developer",
    department: "SDMO Department (HR Business Partner & Industrial Relations)",
    type: "Internship",
    period: "Apr 2024 – Jun 2024",
    location: "Karawang, Indonesia",
    isCurrent: false,
    highlights: [
      "Developed internal web applications for the HR Business Partner & Industrial Relations Department using the Laravel framework based on assigned business and operational requirements.",
      "Designed and managed normalized relational database structures to support HR operational workflows, employee records, and reporting requirements.",
      "Conducted thorough application testing, troubleshooting, maintenance, and system enhancements driven by stakeholder feedback.",
      "Assisted HR operational activities including verification of new employee documentation and administrative coordination for employee recall activities.",
      "Produced digital content and promotional materials for Life at PERURI, including corporate social media publications and video production."
    ],
    tags: ["Laravel", "PHP", "MySQL", "Database Design", "HR Systems", "Application Testing"]
  },
  {
    company: "PT. Inti Ganda Perdana",
    subCompany: "Astra Otoparts Group",
    role: "Fullstack Web Developer",
    department: "Planning Production Control (PPC) Department",
    type: "Internship",
    period: "May 2023 – Nov 2023",
    location: "Karawang, Indonesia",
    isCurrent: false,
    highlights: [
      "Engineered web-based systems for the Planning Production Control (PPC) Department, developing new applications from the ground up and expanding existing platforms with new operational features.",
      "Developed and maintained core system functionality using Laravel, PHP Native, MySQL, and DBeaver for database queries and management.",
      "Analyzed existing system workflows and implemented software enhancements based on direct departmental needs and plant requirements.",
      "Conducted rigorous testing, debugging, and issue resolution across development and staging cycles.",
      "Deployed and installed web applications directly in the active production environment and trained departmental users during initial rollout.",
      "Utilized TortoiseSVN for source code version control and Laragon as a local development environment."
    ],
    tags: ["Laravel", "PHP Native", "MySQL", "DBeaver", "Production Control", "TortoiseSVN", "Laragon"]
  }
];

const Experience = () => {
  return (
    <section className="experience section" id="experience">
      <div className="experience__container container">
        {/* Section Header */}
        <div className="section__header">
          <span className="section__badge">02. Career</span>
          <h2 className="section__title">Professional Experience</h2>
          <p className="section__description">
            Hands-on track record across computerized system validation, enterprise application engineering, and quality assurance.
          </p>
        </div>

        {/* Editorial Timeline List */}
        <div className="experience__list">
          {experiences.map((exp, index) => (
            <div key={index} className="experience__item">
              <div className="experience__timeline-col">
                <span className={`experience__dot ${exp.isCurrent ? "experience__dot--active" : ""}`}></span>
                <span className="experience__line"></span>
              </div>

              <div className="experience__card card">
                {/* Header Row */}
                <div className="experience__header">
                  <div className="experience__title-group">
                    <div className="experience__role-row">
                      <h3 className="experience__role">{exp.role}</h3>
                      <span className="tag tag--accent">{exp.type}</span>
                    </div>
                    <div className="experience__company-row">
                      <span className="experience__company">{exp.company}</span>
                      <span className="experience__subcompany">({exp.subCompany})</span>
                      <span className="experience__dot-sep">•</span>
                      <span className="experience__dept">{exp.department}</span>
                    </div>
                  </div>

                  <div className="experience__meta">
                    <span className="experience__period">
                      <i className="uil uil-calendar-alt"></i> {exp.period}
                    </span>
                    <span className="experience__location">
                      <i className="uil uil-map-marker"></i> {exp.location}
                    </span>
                  </div>
                </div>

                {/* Highlights List */}
                <ul className="experience__highlights">
                  {exp.highlights.map((item, i) => (
                    <li key={i} className="experience__highlight-item">
                      <span className="experience__bullet"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Technology Tags */}
                <div className="experience__tags">
                  {exp.tags.map((tag, t) => (
                    <span key={t} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
