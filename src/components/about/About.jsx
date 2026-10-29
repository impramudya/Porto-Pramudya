import React from "react";
import "./about.css";
import AboutImg from "../../assets/about.jpg";
import CV from "../../assets/Tegar-CV.pdf";

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about__container container">
        {/* Section Header */}
        <div className="section__header">
          <span className="section__badge">01. Overview</span>
          <h2 className="section__title">Background & Professional Profile</h2>
          <p className="section__description">
            Combining rigorous system validation with modern web application engineering.
          </p>
        </div>

        <div className="about__grid">
          {/* Left Column: Image & Personal Snapshot */}
          <div className="about__media">
            <div className="about__image-frame">
              <img
                src={AboutImg}
                alt="Tegar Pramudya Pratama working"
                className="about__img"
              />
            </div>

            <div className="about__snapshot-card">
              <div className="about__snapshot-item">
                <span className="about__snapshot-label">Education</span>
                <span className="about__snapshot-value">B.S. in Informatics (GPA 3.79/4.00)</span>
              </div>
              <div className="about__snapshot-item">
                <span className="about__snapshot-label">Specialization</span>
                <span className="about__snapshot-value">CSV, Quality System & Web Systems</span>
              </div>
              <div className="about__snapshot-item">
                <span className="about__snapshot-label">Location</span>
                <span className="about__snapshot-value">Karawang, West Java, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Core Pillars */}
          <div className="about__content">
            <h3 className="about__subtitle">
              Informatics graduate with practical expertise in CSV, system analysis, and software development.
            </h3>

            <p className="about__text">
              I specialize in bridging the gap between business needs, technical implementation, and regulatory compliance.
              Currently serving in the Quality Assurance Department at <strong>PT. Saka Farma Laboratories (Kalbe Consumer Health)</strong>,
              I execute computerized system validation lifecycle activities including User Requirement Specifications (URS),
              IQ/OQ/PQ protocols, UAT testing, risk assessments, and user access management.
            </p>

            <p className="about__text">
              My engineering background spans developing robust internal enterprise platforms at <strong>PERURI (BUMN)</strong> and
              <strong> PT. Inti Ganda Perdana (Astra Otoparts)</strong>. With proficient knowledge in Laravel, ReactJS, SQL databases,
              and SDLC methodologies, I build transparent, reliable systems designed for scale and audit-readiness.
            </p>

            {/* Core Capability Cards */}
            <div className="about__pillars">
              <div className="about__pillar-card">
                <div className="about__pillar-icon">
                  <i className="uil uil-shield-check"></i>
                </div>
                <div className="about__pillar-info">
                  <h4 className="about__pillar-title">Computerized System Validation (CSV)</h4>
                  <p className="about__pillar-desc">
                    IQ, OQ, PQ, UAT execution, URS review, gap analysis, and GxP compliance documentation.
                  </p>
                </div>
              </div>

              <div className="about__pillar-card">
                <div className="about__pillar-icon">
                  <i className="uil uil-brackets-curly"></i>
                </div>
                <div className="about__pillar-info">
                  <h4 className="about__pillar-title">Full-Stack Application Development</h4>
                  <p className="about__pillar-desc">
                    Designing responsive, production-ready web apps with Laravel, React.js, PHP, and MySQL.
                  </p>
                </div>
              </div>

              <div className="about__pillar-card">
                <div className="about__pillar-icon">
                  <i className="uil uil-chart-line"></i>
                </div>
                <div className="about__pillar-info">
                  <h4 className="about__pillar-title">Data Analytics & Reporting</h4>
                  <p className="about__pillar-desc">
                    Database schema optimization, SQL queries, DBeaver, and Looker Studio monitoring dashboards.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct CV Button */}
            <div className="about__actions">
              <a
                href={CV}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                title="View full CV PDF"
              >
                <i className="uil uil-file-alt"></i>
                <span>View Full Curriculum Vitae</span>
              </a>
              <a
                href={CV}
                download="Tegar-CV.pdf"
                className="btn btn-primary"
                title="Download CV PDF"
              >
                <i className="uil uil-download-alt"></i>
                <span>Download PDF</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
