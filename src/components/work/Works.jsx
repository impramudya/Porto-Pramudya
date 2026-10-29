import React, { useState, useEffect } from "react";
import { projectsData, projectsNav } from "./Data";
import WorkItems from "./WorkItems";

const Works = () => {
  const [item, setItem] = useState({ name: "All", filter: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.filter === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category === item.filter;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index, nav) => {
    setItem(nav);
    setActive(index);
  };

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="work-filters">
        {projectsNav.map((nav, index) => {
          return (
            <button
              onClick={(e) => handleClick(e, index, nav)}
              className={`work-filter-btn ${active === index ? "work-filter-btn--active" : ""}`}
              key={index}
            >
              {nav.name}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {projects.map((proj, idx) => {
          return <WorkItems item={proj} index={idx} key={proj.id} />;
        })}
      </div>
    </div>
  );
};

export default Works;
