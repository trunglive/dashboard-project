import React, { Component } from "react";
import { database } from "../firebase";

class Projects extends Component {
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

    return this.props.render(projects);
  }
}

export default Projects;
