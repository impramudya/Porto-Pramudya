import React from "react";
import "./about.css";
import ProfileImg from "../../assets/profile.jpg";
import CV from "../../assets/Tegar-CV.pdf";

const traits = [
  { label: "TRAIT", value: "Problem Solver" },
  { label: "TRAIT", value: "Detail-Oriented" },
  { label: "TRAIT", value: "Compliance-Driven" },
  { label: "TRAIT", value: "Reliable & Collaborative" },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="about-header">
        <span className="section-label">ABOUT ME</span>
        <h2 className="section-title">Problem Solver. System Validator.</h2>
      </div>

      <div className="about-profile-card">
        {/* Top Header with Avatar */}
        <div className="about-profile-header">
          <div className="about-profile-image-wrapper">
            <img
              src={ProfileImg}
              alt="Tegar Pramudya"
              className="about-profile-image"
              draggable="false"
            />
          </div>
          <div className="about-profile-info">
            <div className="about-profile-name-row">
              <h3 className="about-profile-name">TEGAR PRAMUDYA PRATAMA</h3>
              <span className="about-verified-badge" title="Verified Professional">
                <i className="uil uil-check-circle"></i> Verified
              </span>
            </div>
            <p className="about-profile-sub">
              Computerized System Validation Staff @ PT. Saka Farma Laboratories (Kalbe Consumer Health)
            </p>
            <p className="about-profile-edu">
              B.S. Informatics, Universitas Singaperbangsa Karawang (GPA 3.79 / 4.00 • Latin Honors)
            </p>
          </div>
        </div>

        {/* Narrative */}
        <p className="about-bio-text">
          I am a specialized software and systems professional bridging the gap between rigorous regulatory compliance and modern web engineering. Currently safeguarding quality at Kalbe Consumer Health through thorough URS review, IQ/OQ/PQ protocol design, UAT testing, and automated CSV metrics reporting.
        </p>

        {/* Bento Stats Counter Strip */}
        <div className="about-stats-strip">
          <div className="about-stat-box">
            <span className="about-stat-num">6+</span>
            <span className="about-stat-label">Production & Core Projects</span>
          </div>
          <div className="about-stat-box">
            <span className="about-stat-num">3.79</span>
            <span className="about-stat-label">Informatics GPA (Honors)</span>
          </div>
          <div className="about-stat-box">
            <span className="about-stat-num">1+</span>
            <span className="about-stat-label">Years Industrial Experience</span>
          </div>
          <div className="about-stat-box">
            <span className="about-stat-num">100%</span>
            <span className="about-stat-label">URS & Protocol Traceability</span>
          </div>
        </div>

        {/* Currently Focus & Traits Bento */}
        <div className="about-bento-row">
          {/* Currently Card */}
          <div className="about-currently-card">
            <span className="about-currently-label">CURRENTLY</span>
            <div className="about-currently-list">
              <div className="about-currently-item">
                <span className="about-currently-dot"></span>
                <div>
                  <strong>Validating:</strong> Enterprise computerized systems & CSV dashboards
                </div>
              </div>
              <div className="about-currently-item">
                <span className="about-currently-dot"></span>
                <div>
                  <strong>Building:</strong> High-performance Laravel & React applications
                </div>
              </div>
              <div className="about-currently-item">
                <span className="about-currently-dot"></span>
                <div>
                  <strong>Deepening:</strong> GAMP 5, ALCOA+ data integrity, and QA automation
                </div>
              </div>
            </div>
          </div>

          {/* Traits Grid */}
          <div className="about-traits-grid">
            {traits.map((trait, idx) => (
              <div key={idx} className="about-trait-card">
                <span className="about-trait-label">{trait.label}</span>
                <span className="about-trait-val">{trait.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Resume Banner CTA */}
        <div className="about-resume-cta">
          <div>
            <h4 className="about-resume-heading">Want to know more about my experience?</h4>
            <p className="about-resume-sub">Download my complete professional CV or view it directly.</p>
          </div>
          <div className="about-resume-actions">
            <a
              href={CV}
              download="Tegar-CV.pdf"
              className="btn-richard"
            >
              <i className="uil uil-download-alt"></i>
              <span>Download CV</span>
            </a>
            <a
              href={CV}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-richard-outline"
            >
              <i className="uil uil-file-alt"></i>
              <span>View Online</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
