import React from "react";

import Projects from "./Projects";
import ProjectRow from "./ProjectRow";

const ProjectList = () => (
  <div className="project-list">
    <div className="project-list__title">
      <p className="project-list__title--name project-list__col-1">Name</p>
      <p className="project-list__title--logged-hours project-list__col-2">
        Logged hours
      </p>
      <p className="project-list__title--budget project-list__col-3">Budget</p>
      <p className="project-list__title--budget-spent project-list__col-4">
        Budget spent
      </p>
      <p className="project-list__col-5" />
      <p className="project-list__title--budget-left project-list__col-6">
        Budget left
      </p>
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
