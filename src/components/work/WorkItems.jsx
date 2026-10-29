import React from "react";

const WorkItems = ({ item }) => {

  return (
    <article className="project-card">
      <div className="project-image-wrap">
        <img
          src={item.image}
          alt={item.title}
          className="project-image"
          loading="lazy"
        />
      </div>

      <div className="project-content">
        <h3 className="project-title">{item.title}</h3>
        <p className="project-desc">{item.description}</p>

        {/* Tech Stack Pills */}
        <div className="project-tech">
          {item.technologies.map((tech, idx) => (
            <span key={idx} className="project-tech-item">
              {tech}
            </span>
          ))}
        </div>

        {/* Footer Link */}
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
          title={`View ${item.title} repository`}
        >
          <span>View Project</span>
          <i className="uil uil-arrow-right"></i>
        </a>
      </div>
    </article>
  );
};

export default WorkItems;
