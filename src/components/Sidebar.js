import React, { Component } from "react";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar__initial">T</div>
        <div className="sidebar__hr" />
        <div className="sidebar__hours">
          <img className="sidebar__icon disable" src="/icons/hours.svg" />
          <p>hours</p>
        </div>
        <div className="sidebar__projects">
          <img className="sidebar__icon" src="/icons/projects-white.svg" />
          <p>projects</p>
        </div>
        <div className="sidebar__people">
          <img className="sidebar__icon disable" src="/icons/people.svg" />
          <p>people</p>
        </div>
        <div className="sidebar__reports">
          <img className="sidebar__icon disable" src="/icons/reports.svg" />
          <p>reports</p>
        </div>
        <div className="sidebar__trial-left">
          <p>12 days</p>
          <p>left in trial</p>
        </div>
        <div className="sidebar__getting-started-percentage">85%</div>
        <div className="sidebar__settings">
          <img className="sidebar__icon disable" src="/icons/settings.svg" />
        </div>
        <div className="sidebar__notifications">
          <img
            className="sidebar__icon disable"
            src="/icons/notifications.svg"
          />
        </div>
        <div className="sidebar__support">
          <img className="sidebar__icon disable" src="/icons/support.svg" />
        </div>
        <div className="sidebar__personal-settings">
          <img
            className="sidebar__icon disable"
            src="/icons/personal-settings.svg"
          />
        </div>
      </div>
    );
  }
}

export default Sidebar;
