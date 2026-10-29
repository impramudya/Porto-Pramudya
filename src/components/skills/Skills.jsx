import React from "react";
import "./skills.css";

const techIcons = [
  { name: "Laravel", icon: "uil-server-network", tag: "Backend" },
  { name: "React.js", icon: "uil-react", tag: "Frontend" },
  { name: "PHP", icon: "uil-brackets-curly", tag: "Core" },
  { name: "MySQL", icon: "uil-database", tag: "Database" },
  { name: "Python", icon: "uil-arrow", tag: "Scripting" },
  { name: "Looker Studio", icon: "uil-chart-line", tag: "BI Dashboard" },
  { name: "Tailwind CSS", icon: "uil-brush", tag: "Styling" },
  { name: "Git / GitHub", icon: "uil-github", tag: "VCS" },
  { name: "DBeaver", icon: "uil-layers", tag: "SQL Admin" },
  { name: "Figma", icon: "uil-vector-square", tag: "UI/UX" },
  { name: "Draw.io", icon: "uil-sitemap", tag: "Process Map" },
  { name: "Filament", icon: "uil-dashboard", tag: "Admin Panel" },
];

const Skills = () => {
  return (
    <section id="what-i-can-do" className="section">
      <div className="what-i-can-do-grid">
        {/* Left Column: Tech Stack & Intro */}
        <div className="what-i-can-do-left">
          <span className="section-label">My Capabilities</span>
          <h2 className="section-title">What I Can Do</h2>
          <p className="what-i-can-do-desc">
            I combine computerized system validation, QA methodologies, and full-stack software development to engineer compliant, reliable enterprise systems and automated workflows.
          </p>

          <div className="what-i-can-do-micro">CORE TECHNOLOGIES & TOOLS</div>

          <div className="tech-stack-grid">
            {techIcons.map((t, i) => (
              <div key={i} className="tech-stack-card">
                <i className={`uil ${t.icon} tech-stack-icon`}></i>
                <div className="tech-stack-info">
                  <span className="tech-stack-name">{t.name}</span>
                  <span className="tech-stack-tag">{t.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Bento Cards */}
        <div className="what-i-can-do-right">
          {/* Bento Card 1: CSV & QA */}
          <div className="bento-card bento-large">
            <div className="bento-badge">Core Specialization</div>
            <h3 className="bento-title">Computerized System Validation & QA</h3>
            <p className="bento-desc">
              Extensive hands-on practice in regulatory computerized system validation (CSV) within pharmaceutical manufacturing (Kalbe Consumer Health):
            </p>
            <div className="bento-pill-group">
              <span className="bento-pill">URS Analysis & Traceability</span>
              <span className="bento-pill">IQ / OQ / PQ Execution</span>
              <span className="bento-pill">User Acceptance Testing (UAT)</span>
              <span className="bento-pill">Risk & Impact Assessment</span>
              <span className="bento-pill">ALCOA+ Data Integrity</span>
              <span className="bento-pill">Good Documentation Practice (GDP)</span>
              <span className="bento-pill">User Access Management</span>
              <span className="bento-pill">System Lifecycle Management (SLCM)</span>
            </div>
          </div>

          {/* Bento Card 2: Software Development */}
          <div className="bento-card bento-medium">
            <div className="bento-badge">Full-Stack</div>
            <h3 className="bento-title">Web Development & Systems</h3>
            <p className="bento-desc">
              Designing responsive web platforms, normalized relational schemas, and modern admin dashboards.
            </p>
            <div className="bento-pill-group">
              <span className="bento-pill">Laravel MVC</span>
              <span className="bento-pill">React.js Components</span>
              <span className="bento-pill">RESTful APIs</span>
              <span className="bento-pill">Filament Panels</span>
              <span className="bento-pill">Tailwind CSS</span>
            </div>
          </div>

          {/* Bento Card 3: Databases & Analytics */}
          <div className="bento-card bento-medium">
            <div className="bento-badge">Analytics</div>
            <h3 className="bento-title">Databases & Dashboards</h3>
            <p className="bento-desc">
              Query optimization, schema architecture, and real-time validation monitoring dashboards in Looker Studio.
            </p>
            <div className="bento-pill-group">
              <span className="bento-pill">MySQL Architecture</span>
              <span className="bento-pill">Looker Studio CSV Dashboards</span>
              <span className="bento-pill">DBeaver SQL</span>
              <span className="bento-pill">Python Data Processing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
