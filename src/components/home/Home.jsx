import React from "react";
import "./home.css";
import ProfileImg from "../../assets/profile.jpg";
import CV from "../../assets/Tegar-CV.pdf";

const Home = () => {
  return (
    <section id="hero" className="hero-root">
      {/* Background Giant Text Marquee (Richard Miculob Signature Ticker) */}
      <div className="bg-name-marquee">
        <div className="bg-name-track">
          <span className="bg-name-text">TEGAR PRAMUDYA</span>
          <span className="bg-name-text">TEGAR PRAMUDYA</span>
          <span className="bg-name-text">TEGAR PRAMUDYA</span>
          <span className="bg-name-text">TEGAR PRAMUDYA</span>
        </div>
      </div>

      {/* Additional Staggered Background Marquee Rows */}
      <div className="bg-name-marquee bg-name-marquee--t1" aria-hidden="true">
        <div className="bg-name-track bg-name-track--reverse">
          <span className="bg-name-text bg-name-text--faint">COMPUTERIZED SYSTEM VALIDATION</span>
          <span className="bg-name-text bg-name-text--faint">FULLSTACK WEB DEVELOPER</span>
          <span className="bg-name-text bg-name-text--faint">COMPUTERIZED SYSTEM VALIDATION</span>
          <span className="bg-name-text bg-name-text--faint">FULLSTACK WEB DEVELOPER</span>
        </div>
      </div>

      <div className="bg-name-marquee bg-name-marquee--b1" aria-hidden="true">
        <div className="bg-name-track">
          <span className="bg-name-text bg-name-text--faint">QA COMPLIANCE • DATA INTEGRITY</span>
          <span className="bg-name-text bg-name-text--faint">LARAVEL • REACT • SQL • GAMP</span>
          <span className="bg-name-text bg-name-text--faint">QA COMPLIANCE • DATA INTEGRITY</span>
          <span className="bg-name-text bg-name-text--faint">LARAVEL • REACT • SQL • GAMP</span>
        </div>
      </div>

      {/* Concentric Radar Rings */}
      <div className="concentric-circles">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>

      {/* Profile Image Wrap */}
      <div className="profile-wrap">
        <div className="profile-container">
          <img
            src={ProfileImg}
            alt="Tegar Pramudya Pratama"
            className="profile-image"
            draggable="false"
          />
          <div className="profile-badge">
            <span className="profile-badge-dot"></span>
            <span>CSV Staff • PT. Saka Farma (Kalbe)</span>
          </div>
        </div>
      </div>

      {/* Hero Headline Overlay Card */}
      <div className="hero-floating-card">
        <h1 className="hero-floating-title">Tegar Pramudya Pratama</h1>
        <p className="hero-floating-desc">
          Software & Data Engineer | Computerized System Validation (CSV) | Enterprise Solution Analyst
        </p>
        <div className="hero-floating-actions">
          <a href="#work" className="btn-richard">
            <span>Explore Work</span>
            <i className="uil uil-arrow-down"></i>
          </a>
          <a
            href={CV}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-richard-outline"
          >
            <i className="uil uil-file-alt"></i>
            <span>Resume</span>
          </a>
        </div>
      </div>

      {/* Vertical Scroll Down Indicator */}
      <a href="#work" className="scroll-indicator" title="Scroll down to work">
        <div className="scroll-line"></div>
        <span className="scroll-text">Scroll Down</span>
      </a>
    </section>
  );
};

export default Home;
