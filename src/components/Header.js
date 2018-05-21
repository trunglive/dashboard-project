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
          <div className="new-project" onClick={this.openModal}>
            <img
              className="new-project__plus-sign-icon"
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
          <form>
            <div className="new-project-group" />
            <div className="project-name-group" />
            <div className="project-color-group" />
            <div className="client-group" />
            <div className="tags-group" />
            <div className="hourly-rate-group" />
            <div className="budget-group" />
            <div className="submit-button-group" />
          </form>
        </NewProjectModal>
      </div>
    );
  }
}

export default Header;
