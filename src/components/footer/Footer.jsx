import React from "react";
import "./footer.css";
import CV from "../../assets/Tegar-CV.pdf";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__title">Tegar Pramudya Pratama</span>
            <p className="footer__tagline">
              Computerized System Validation (CSV) & Full-Stack Web Development.
            </p>
          </div>

          <nav className="footer__nav">
            <ul className="footer__list">
              <li>
                <a href="#about" className="footer__link">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="footer__link">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="footer__link">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="footer__link">
                  Skills
                </a>
              </li>
              <li>
                <a href="#education" className="footer__link">
                  Education
                </a>
              </li>
              <li>
                <a
                  href={CV}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  Curriculum Vitae
                </a>
              </li>
            </ul>
          </nav>

          <div className="footer__socials">
            <a
              href="https://www.linkedin.com/in/tegarpramudya/"
              className="footer__social-btn"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <i className="uil uil-linkedin"></i>
            </a>
            <a
              href="https://github.com/impramudya"
              className="footer__social-btn"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <i className="uil uil-github"></i>
            </a>
            <a
              href="mailto:tegarpramudyap@gmail.com"
              className="footer__social-btn"
              aria-label="Email"
            >
              <i className="uil uil-envelope"></i>
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <span className="footer__copy">
            © {currentYear} Tegar Pramudya Pratama. Designed with modern minimalism.
          </span>
          <a href="#home" className="footer__back-to-top">
            <span>Back to top</span>
            <i className="uil uil-arrow-up"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
