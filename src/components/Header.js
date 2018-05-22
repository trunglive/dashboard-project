import React, { Component } from "react";
import { Link } from "react-router-dom";
import NewProjectModal from "react-modal";
import Select from "react-select";
import "react-select/dist/react-select.css";

class Header extends Component {
  state = {
    isModalOpen: false,
    selectedColorOption: "",
    selectedClientOption: "",
    budgetType: "no budget"
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

  handleColorChange = selectedColorOption => {
    this.setState({ selectedColorOption });
  };

  handleClientChange = selectedClientOption => {
    this.setState({ selectedClientOption });
  };

  handleBudgetChange = e => {
    this.setState({
      budgetType: e.target.value
    });
  };

  render() {
    const {
      isModalOpen,
      selectedColorOption,
      selectedClientOption,
      budgetType
    } = this.state;

    const colorVal = selectedColorOption && selectedColorOption.value;
    const clientVal = selectedClientOption && selectedClientOption.value;

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
                <p className="project-name field-title">Project name</p>
                <input
                  type="text"
                  id="project-name"
                  name="projectName"
                  required
                />
              </div>
              <div className="project-color-group">
                <p className="project-color field-title">Project color</p>
                <label className="label-text">
                  <Select
                    className="project-color-select-field"
                    name="project-color-field"
                    value={colorVal}
                    onChange={this.handleColorChange}
                    options={[
                      { value: "47b17c", label: "Green" },
                      { value: "67a3bc", label: "Blue" },
                      { value: "bd4c4f", label: "Red" },
                      { value: "d0915a", label: "Orange" },
                      { value: "866b9c", label: "Dark Purple" },
                      { value: "cdae4f", label: "Yellow" },
                      { value: "5ab8b7", label: "Cyan" },
                      { value: "c697c0", label: "Light Purple" }
                    ]}
                  />
                  Colors make it easy to tell projects apart
                </label>
              </div>
              <div className="client-group">
                <p className="client field-title">Client</p>
                <Select
                  className="client-select-field"
                  name="client-field"
                  value={clientVal}
                  onChange={this.handleClientChange}
                  options={[
                    { value: "Aerlie", label: "Aerlie" },
                    { value: "Heliur", label: "Heliur" },
                    { value: "Jasteri", label: "Jasteri" },
                    { value: "Liseras", label: "Liseras" },
                    { value: "Valesa", label: "Valesa" }
                  ]}
                />
              </div>
              <div className="hourly-rate-group">
                <p className="hourly-rate field-title">Hourly rate</p>
                <label className="label-text">
                  <input
                    type="number"
                    id="hourly-rate"
                    name="hourlyRate"
                    min="15"
                    required
                  />
                  per person / hour
                </label>
              </div>
              <div className="budget-group">
                <p className="budget field-title">Budget</p>

                <div className="radio-budget-group">
                  <input
                    type="radio"
                    id="budget1"
                    name="budget"
                    value="no budget"
                    onChange={this.handleBudgetChange}
                  />
                  <label labelFor="budget1" className="label-radio-text">
                    No budget
                  </label>

                  <input
                    type="radio"
                    id="budget2"
                    name="budget"
                    value="time budget"
                    onChange={this.handleBudgetChange}
                  />
                  <label labelFor="budget2" className="label-radio-text">
                    Time budget
                  </label>

                  <input
                    type="radio"
                    id="budget3"
                    name="budget"
                    value="money budget"
                    onChange={this.handleBudgetChange}
                  />
                  <label labelFor="budget3" className="label-radio-text">
                    Money budget
                  </label>
                </div>
                {budgetType !== "no budget" && (
                  <label className="label-text">
                    <input
                      className="total-budget-input"
                      type="number"
                      id="total-budget"
                      name="totalBudget"
                      required
                    />
                    {`total ${budgetType}`}
                  </label>
                )}
              </div>
              <div className="submit-button-group">
                <div className="submit-button">Create</div>
                <p className="cancel-button">Cancel</p>
              </div>
            </form>
          </div>
        </NewProjectModal>
      </div>
    );
  }
}

export default Header;
