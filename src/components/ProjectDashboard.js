import React from "react";

import Projects from "./Projects";
import ProjectCard from "./ProjectCard";

const ProjectDashboard = () => (
  <div className="project-dashboard">
    <div className="project-dashboard__title">Recent and pinned projects</div>
    <div className="all-project-cards">
      {
        <Projects
          render={projects =>
            projects.length > 0 ? (
              projects.map(project => (
                <ProjectCard {...project} key={project.id} />
              ))
            ) : (
              <img className="spinner" src="/icons/spinner.svg" />
            )
          }
        />
      }
    </div>
  </div>
);

export default ProjectDashboard;
