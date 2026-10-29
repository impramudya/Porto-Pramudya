import React, { useState, useEffect } from "react";
import "./header.css";
import CV from "../../assets/Tegar-CV.pdf";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    return document.documentElement.classList.contains("dark");
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const navLinks = [
    { href: "#work", label: "Work" },
    { href: "#what-i-can-do", label: "What I Can Do" },
    { href: "#about", label: "About" },
    { href: "#awards", label: "Awards" },
    { href: "#trainings", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className={`nav-bar ${isScrolled ? "scrolled" : ""} ${menuOpen ? "nav-bar--expanded" : ""}`}>
      {/* Brand & Mobile Header */}
      <div className="nav-mobile-header">
        <a href="#hero" className="nav-left">
          <div className="nav-logo">T</div>
          <div className="nav-brand">TEGAR</div>
        </a>

        <div className="nav-mobile-controls">
          <button
            type="button"
            className="nav-theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {isDark ? (
              <i className="uil uil-sun"></i>
            ) : (
              <i className="uil uil-moon"></i>
            )}
          </button>

          <button
            type="button"
            className="nav-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            <i className={menuOpen ? "uil uil-times" : "uil uil-bars"}></i>
          </button>
        </div>
      </div>

      {/* Desktop Navigation Links */}
      <div className="nav-links">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Right Desktop Actions */}
      <div className="nav-actions">
        <button
          type="button"
          className="nav-theme-toggle nav-theme-toggle--desktop"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title="Toggle theme"
        >
          {isDark ? (
            <i className="uil uil-sun"></i>
          ) : (
            <i className="uil uil-moon"></i>
          )}
        </button>

        <a
          href={CV}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta-btn"
          title="View Resume / CV"
        >
          <span>View CV</span>
          <i className="uil uil-arrow-up-right"></i>
        </a>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="nav-mobile-menu">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-mobile-item"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={CV}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-mobile-cta"
            onClick={() => setMenuOpen(false)}
          >
            <i className="uil uil-file-alt"></i>
            <span>View CV / Resume</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Header;
