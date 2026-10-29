import React, { useState, useMemo } from "react";
import { projectsData, projectsNav } from "./Data";
import WorkItems from "./WorkItems";

const Works = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") {
      return projectsData;
    }
    return projectsData.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="work__wrapper">
      {/* Filter Tabs */}
      <div className="work__filters">
        {projectsNav.map((nav) => (
          <button
            key={nav.filter}
            type="button"
            className={`work__filter-btn ${
              activeFilter === nav.filter ? "work__filter-btn--active" : ""
            }`}
            onClick={() => setActiveFilter(nav.filter)}
          >
            {nav.name}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="work__grid">
        {filteredProjects.map((item) => (
          <WorkItems key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Works;
