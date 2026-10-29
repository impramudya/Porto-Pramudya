import React from "react";

const WorkItems = ({ item }) => {
  return (
    <article className="work__card card">
      {/* Thumbnail Frame */}
      <div className="work__thumbnail">
        <img
          src={item.image}
          alt={item.title}
          className="work__img"
          loading="lazy"
        />
        <span className="work__category-badge">{item.categoryLabel}</span>
      </div>

      {/* Content */}
      <div className="work__body">
        <h3 className="work__title">{item.title}</h3>
        <p className="work__description">{item.description}</p>

        {/* Tech Stack Pills */}
        <div className="work__tags">
          {item.technologies.map((tech, idx) => (
            <span key={idx} className="tag">
              {tech}
            </span>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="work__footer">
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm work__link"
            title={`View ${item.title} on GitHub`}
          >
            <i className="uil uil-github"></i>
            <span>View Repository</span>
            <i className="uil uil-arrow-up-right"></i>
          </a>
        </div>
      </div>
    </article>
  );
};

export default WorkItems;
