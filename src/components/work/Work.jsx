import React from "react";
import "./work.css";
import Works from "./Works";

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="work-header">
        <div>
          <span className="section-label">Selected Work</span>
          <h2 className="section-title">Work Gallery</h2>
          <p className="section-desc">
            A collection of systems, digital platforms, and computerized validation projects I've built.
          </p>
        </div>
        <a
          href="https://github.com/impramudya"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-richard-outline"
        >
          <span>GitHub Archive</span>
          <i className="uil uil-arrow-up-right"></i>
        </a>
      </div>

      <Works />
    </section>
  );
};

export default Work;
