import React, { Component } from "react";

class ProjectList extends Component {
  render() {
    return (
      <div className="project-list">
        <div className="project-list__title">
          <p>Name</p>
          <p>Logged hours</p>
          <p>Budget</p>
          <p>Budget spent</p>
          <p>Budget left</p>
        </div>
      </div>
    );
  }
}

export default ProjectList;
