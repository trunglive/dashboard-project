import React, { Component } from "react";

const ProjectCard = ({ budget, budget_type, client, name, color }) => (
  <div className="project-card">
    <div className="project-card-group-top">
      <div
        className="project-card__color"
        style={{ backgroundColor: `#${color}` }}
      >
        <img className="project-card__icon" src="/icons/projects-white.svg" />
      </div>
      <div className="project-name-and-client-name">
        <p className="project-name">{name}</p>
        <p className="client-name">{client.name}</p>
      </div>
    </div>

    <div className="project-card-group-bottom">
      <div
        className={
          budget_type === "N"
            ? "project-card__progress no-budget"
            : "project-card__progress"
        }
      />

      <div className="project-card__budget">
        {budget_type === "M" && `$${budget} left`}
        {budget_type === "T" && `${budget}:00 left`}
      </div>
    </div>
  </div>
);

export default ProjectCard;