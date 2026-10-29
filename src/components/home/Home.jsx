import React from "react";
import "./home.css";
import ProfileImg from "../../assets/profile.jpg";
import CV from "../../assets/Tegar-CV.pdf";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__container container">
        <div className="home__layout">
          {/* Left Column: Text & Content */}
          <div className="home__data">
            {/* Status Pill */}
            <div className="home__status-badge">
              <span className="home__status-dot"></span>
              <span>Available for Opportunities • Karawang / Jakarta / Bekasi</span>
            </div>

            {/* Name & Headline */}
            <h1 className="home__name">Tegar Pramudya Pratama</h1>
            <p className="home__role">
              Computerized System Validation (CSV) Staff & Full-Stack Developer
            </p>

            {/* Concise CV Summary */}
            <p className="home__bio">
              Informatics graduate specialized in system analysis, computerized system validation (CSV), and web
              application development. Experienced in preparing IQ/OQ/PQ protocols, UAT testing, URS reviews, risk assessments,
              and building data-driven systems using Laravel, React, and SQL.
            </p>

            {/* Primary Action Buttons */}
            <div className="home__actions">
              <a href="#projects" className="btn btn-primary">
                <span>View Projects</span>
                <i className="uil uil-arrow-down"></i>
              </a>
              <a
                href={CV}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                title="View CV in browser"
              >
                <i className="uil uil-file-alt"></i>
                <span>View CV</span>
              </a>
              <a
                href={CV}
                download="Tegar-CV.pdf"
                className="btn btn-secondary"
                title="Download CV"
              >
                <i className="uil uil-download-alt"></i>
                <span>Download CV</span>
              </a>
            </div>

            {/* Social & Contact Strip */}
            <div className="home__social">
              <span className="home__social-label">Connect:</span>
              <a
                href="https://www.linkedin.com/in/tegarpramudya/"
                target="_blank"
                rel="noreferrer"
                className="home__social-link"
                title="LinkedIn"
              >
                <i className="uil uil-linkedin"></i>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/impramudya"
                target="_blank"
                rel="noreferrer"
                className="home__social-link"
                title="GitHub"
              >
                <i className="uil uil-github"></i>
                <span>GitHub</span>
              </a>
              <a
                href="mailto:tegarpramudyap@gmail.com"
                className="home__social-link"
                title="Email"
              >
                <i className="uil uil-envelope"></i>
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Profile Image Card */}
          <div className="home__visual">
            <div className="home__image-card">
              <img
                src={ProfileImg}
                alt="Tegar Pramudya Pratama"
                className="home__image"
              />
              <div className="home__image-badge">
                <span className="home__image-badge-role">Current Role</span>
                <span className="home__image-badge-company">QA CSV Staff • PT. Saka Farma</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Highlights / Metrics Grid */}
        <div className="home__metrics">
          <div className="home__metric-item">
            <span className="home__metric-number">May 2025 – Present</span>
            <span className="home__metric-label">QA CSV Staff at PT. Saka Farma (Kalbe)</span>
          </div>
          <div className="home__metric-item">
            <span className="home__metric-number">3.79 / 4.00</span>
            <span className="home__metric-label">Informatics GPA • UNSIKA</span>
          </div>
          <div className="home__metric-item">
            <span className="home__metric-number">6+ Systems Built</span>
            <span className="home__metric-label">Laravel, React, PHP & SQL Applications</span>
          </div>
          <div className="home__metric-item">
            <span className="home__metric-number">IQ / OQ / PQ & UAT</span>
            <span className="home__metric-label">Validated Compliance & GDP Protocols</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
