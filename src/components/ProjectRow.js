import React, { Component } from "react";

class ProjectRow extends Component {
  render() {
    const { client, color, name, budget, budget_type } = this.props;
    const formattedBudget = budget_type === "M" ? `$${budget}` : `${budget}:00`;

    return (
      <div className="project-row">
        <p className="project-row__client-name project-row-top">
          {client.name}
        </p>
        <div className="project-row-bottom">
          <div className="project-row__name-container project-list__col-1">
            <div
              className="project-row__color square-color"
              style={{ backgroundColor: `#${color}` }}
            >
              <img
                className="project-row__icon bag-icon"
                src="/icons/projects-white.svg"
              />
            </div>
            <p className="project-row__name">{name}</p>
          </div>
          <div className="project-row__logged-hours-container project-list__col-2">
            00:00
          </div>
          {budget_type !== "N" ? (
            <div className="project-row-budget-group">
              <div className="project-row__budget-container project-list__col-3">
                {formattedBudget}
              </div>
              <div className="project-list__col-4">
                <div className="project-row__budget-spent-container" />
              </div>

              <span className="project-list__col-5">0%</span>
              <div className="project-row__budget-left-container project-list__col-6">
                {formattedBudget}
              </div>
            </div>
          ) : (
            <div className="project-row-budget-group--empty" />
          )}
          <div className="project-row__setting-container project-list__col-7">
            <img
              className="project-row-setting-icon"
              src="/icons/setting.svg"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectRow;
