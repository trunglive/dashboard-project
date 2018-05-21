import React, { Component } from "react";
import { database } from "../firebase";
import ProjectCard from "./ProjectCard";

class ProjectDashboard extends Component {
  state = {
    projects: []
  };

  componentDidMount() {
    database.ref("timely/dashboard/projects").on("value", snapshot => {
      const projects = [];

      snapshot.forEach(childSnapshot => {
        projects.push({
          firebaseProjectId: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      this.setState({ projects });
    });
  }

  render() {
    const { projects } = this.state;
    console.log(projects);
    return (
      <div className="project-dashboard">
        <div className="project-dashboard__title">
          Recent and pinned projects
        </div>
        <div className="all-project-cards">
          {projects.length > 0 ? (
            projects.map(project => (
              <ProjectCard {...project} key={project.id} />
            ))
          ) : (
            <img src="/icons/spinner.svg" />
          )}
        </div>
      </div>
    );
  }
}

export default ProjectDashboard;
