import React, { Component } from "react";
import { Link } from "react-router-dom";
import WithNewProject from "./WithNewProject";
import NewProject from "./NewProjectModal";

class Header extends Component {
  state = {
    isModalOpen: false
  };

  openModal = () => {
    this.setState({
      isModalOpen: true
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false
    });
  };

  render() {
    return (
      <div className="header">
        <div className="header-left">
          <p className="title">Projects</p>
          <div className="header__tab">
            <Link to="/projects/dashboard">
              <div className="header__tab--dashboard">Dashboard</div>
            </Link>
            <Link to="/projects/list">
              <div className="header__tab--all-projects">All Projects</div>
            </Link>
          </div>
        </div>
        <div className="header-right">
          <div className="client-or-project">
            <img className="search-icon" src="/icons/search.svg" />
            <span>Client or Projects</span>
          </div>
          <div className="manage-clients">
            <img className="person-icon" src="/icons/person.svg" />
            <span>Manage clients</span>
          </div>
          <div className="new-project-button" onClick={this.openModal}>
            <img
              className="new-project-button__plus-sign-icon"
              src="/icons/plus-sign.svg"
            />
            <span>New project</span>
          </div>
          <NewProject
            isModalOpen={this.state.isModalOpen}
            closeModal={this.closeModal}
          />
        </div>
      </div>
    );
  }
}

export default WithNewProject(Header);
