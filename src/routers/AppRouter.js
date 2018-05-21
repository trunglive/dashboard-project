import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../components/Home";
import ProjectDashboard from "../components/ProjectDashboard";
import ProjectList from "../components/ProjectList";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Switch className="app">
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/calendar/week" component={Hours} /> */}
          <div className="dashboard-container">
            <Sidebar />
            <Header />
            <Route
              exact
              path="/projects/dashboard"
              component={ProjectDashboard}
            />
            <Route exact path="/projects/list" component={ProjectList} />
          </div>

          {/* <Route exact path="/projects/:id" component={Project} /> */}
          {/* <Route exact path="/users" component={People} /> */}
          {/* <Route exact path="/superreports" component={Reports} /> */}
        </Switch>
      </Router>
    );
  }
}
export default AppRouter;
