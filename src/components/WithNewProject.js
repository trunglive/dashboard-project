import React, { Component } from "react";

const WithNewProject = WrappedComponent =>
  class extends Component {
    state = {
      isModalOpen: false,
      selectedColorOption: "",
      selectedClientOption: "",
      budgetType: "no budget"
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
      console.log(this.state.modalState)
      return (
        <WrappedComponent
          {...this.state}
          {...this.props}
          handleColorChange={this.handleColorChange}
          handleClientChange={this.handleClientChange}
          handleBudgetChange={this.handleBudgetChange}
        />
      );
    }
  };

export default WithNewProject;
