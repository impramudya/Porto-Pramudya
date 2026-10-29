import React from "react";
import "./footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-root">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand-box">
            <div className="footer-logo">;</div>
            <div className="footer-brand-text">
              <span className="footer-title">TEGAR PRAMUDYA PRATAMA</span>
              <span className="footer-sub">
                Software & Data Engineer - Computerized System Validation (CSV)
              </span>
            </div>
          </div>

          <div className="footer-links">
            <a href="#work" className="footer-link">Work</a>
            <a href="#what-i-can-do" className="footer-link">Capabilities</a>
            <a href="#about" className="footer-link">About</a>
            <a href="#awards" className="footer-link">Awards</a>
            <a href="#trainings" className="footer-link">Experience</a>
            <a href="#contact" className="footer-link">Contact</a>
          </div>

          <div className="footer-social-strip">
            <a
              href="https://github.com/impramudya"
              target="_blank"
              rel="noreferrer"
              className="footer-social-btn"
              title="GitHub"
            >
              <i className="uil uil-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/tegarpramudya/"
              target="_blank"
              rel="noreferrer"
              className="footer-social-btn"
              title="LinkedIn"
            >
              <i className="uil uil-linkedin"></i>
            </a>
            <a
              href="mailto:tegarpramudyap@gmail.com"
              className="footer-social-btn"
              title="Email"
            >
              <i className="uil uil-envelope"></i>
            </a>
            <a
              href="https://wa.me/6289630122001"
              target="_blank"
              rel="noreferrer"
              className="footer-social-btn"
              title="WhatsApp"
            >
              <i className="uil uil-whatsapp"></i>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copyright">
            © {new Date().getFullYear()} Tegar Pramudya Pratama. All rights reserved.
          </span>

          <button
            type="button"
            className="footer-back-to-top"
            onClick={scrollToTop}
          >
            <span>Back to Top</span>
            <i className="uil uil-arrow-up"></i>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
