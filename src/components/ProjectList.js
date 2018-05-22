import React from "react";
import Projects from "./Projects";
import ProjectRow from "./ProjectRow";

const ProjectList = () => (
  <div className="project-list">
    <div className="project-list__title">
      <p className="project-list__title--name">Name</p>
      <p className="project-list__title--logged-hours">Logged hours</p>
      <p className="project-list__title--budget">Budget</p>
      <p className="project-list__title--budget-spent">Budget spent</p>
      <p className="project-list__title--budget-left">Budget left</p>
    </div>
    {
      <Projects
        render={projects =>
          projects.map(project => <ProjectRow {...project} key={project.id} />)
        }
      />
    }
  </div>
);

export default ProjectList;
