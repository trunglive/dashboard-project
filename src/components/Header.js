import React, { Component } from "react";
import { Link } from "react-router-dom";
import NewProjectModal from "react-modal";

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
    const { isModalOpen } = this.state;

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
        </div>

        <NewProjectModal
          isOpen={isModalOpen}
          onRequestClose={this.closeModal}
          closeTimeoutMS={200}
          className="new-project-modal-container"
          contentLabel="modal for new project"
        >
          <div className="project-modal">
            <div className="new-project-group">
              <div className="bag-group">
                <img
                  className="new-project-group__bag-icon"
                  src="/icons/projects-black.svg"
                />
                <span>New Project</span>
              </div>
              <img
                onClick={this.closeModal}
                className="new-project-group__close-icon"
                src="/icons/close.svg"
              />
            </div>
            <form className="new-project-form" id="new-project-form">
              <div className="project-name-group">
                <label labelFor="project-name" className="project-name">Project name</label>
                <input type="text" id="project-name" name="projectName" />
              </div>
              <div className="project-color-group">
              <label labelFor="project-color">Project color</label>
              <input type="" />
              </div>
              <div className="client-group" />
              <div className="tags-group" />
              <div className="hourly-rate-group" />
              <div className="budget-group" />
              <div className="submit-button-group" />
            </form>
          </div>
        </NewProjectModal>
      </div>
    );
  }
}

export default Header;
