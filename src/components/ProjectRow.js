import React, { Component } from "react";

class ProjectRow extends Component {
  render() {
    const { client, color, name, budget, budget_type } = this.props;
    const formattedBudget = budget_type === "M" ? `$${budget}` : `${budget}:00`;

    return (
      <div className="project-row">
        <div className="project-row__name-container">
          <p>{client.name}</p>
          <div>
            <div className="icon-and-color-group" />
            <p>{name}</p>
          </div>
        </div>
        <div className="project-row__logged-hours-container">00:00</div>
        {budget_type !== "N" && (
          <div>
            <div className="project-row__budget-container">
              {formattedBudget}
            </div>
            <div className="project-row__budget-spent-container" />
            <div className="project-row__budget-left-container">
              {formattedBudget}
            </div>
          </div>
        )}
        <div className="project-row__setting-container" />
      </div>
    );
  }
}

export default ProjectRow;
