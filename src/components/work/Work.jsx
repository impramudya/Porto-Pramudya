import React from "react";
import "./work.css";
import Works from "./Works";

const Work = () => {
  return (
    <section className="work section" id="projects">
      <div className="work__container container">
        {/* Section Header */}
        <div className="section__header">
          <span className="section__badge">03. Portfolio</span>
          <h2 className="section__title">Selected Projects</h2>
          <p className="section__description">
            Production, enterprise, and validated software systems developed during industrial engagements and academic projects.
          </p>
        </div>

        <Works />
      </div>
    </section>
  );
};

export default Work;
