import React, { useState, useEffect } from "react";
import "./header.css";
import CV from "../../assets/Tegar-CV.pdf";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["home", "about", "experience", "projects", "skills", "education", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About", id: "about" },
    { href: "#experience", label: "Experience", id: "experience" },
    { href: "#projects", label: "Projects", id: "projects" },
    { href: "#skills", label: "Skills", id: "skills" },
    { href: "#education", label: "Education", id: "education" },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  return (
    <header className={`header ${isScrolled ? "header--scrolled" : ""}`}>
      <div className="header__container container">
        <a href="#home" className="header__logo">
          <span className="header__logo-name">Tegar Pramudya</span>
          <span className="header__logo-tag">CSV & Web Developer</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="header__nav">
          <ul className="header__nav-list">
            {navLinks.map((link) => (
              <li key={link.id} className="header__nav-item">
                <a
                  href={link.href}
                  className={`header__nav-link ${
                    activeSection === link.id ? "header__nav-link--active" : ""
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Header Actions */}
        <div className="header__actions">
          <a
            href={CV}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm"
            title="Open CV in a new tab"
          >
            <i className="uil uil-file-alt"></i>
            <span>View CV</span>
          </a>
          <a
            href={CV}
            download="Tegar-CV.pdf"
            className="btn btn-primary btn-sm"
            title="Download CV PDF"
          >
            <i className="uil uil-download-alt"></i>
            <span>Download CV</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="header__toggle"
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className={menuOpen ? "uil uil-times" : "uil uil-bars"}></i>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`header__mobile-menu ${menuOpen ? "header__mobile-menu--open" : ""}`}>
        <ul className="header__mobile-list">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={`header__mobile-link ${
                  activeSection === link.id ? "header__mobile-link--active" : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="header__mobile-actions">
          <a
            href={CV}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            onClick={() => setMenuOpen(false)}
          >
            <i className="uil uil-file-alt"></i> View CV
          </a>
          <a
            href={CV}
            download="Tegar-CV.pdf"
            className="btn btn-primary"
            onClick={() => setMenuOpen(false)}
          >
            <i className="uil uil-download-alt"></i> Download CV
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
