import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../components/Home';

const AppRouter = () => (
  <Router>
    <Switch className="main-dashboard">
      <Route exact path="/" component={Home} />
      <Route exact path="/calendar/week" component={Hours} />
      <Route exact path="/projects/dashboard" component={ProjectDashboard} />
      <Route exact path="/projects/list" component={ProjectList} />
      <Route exact path="/projects/:id" component={Project} />
      <Route exact path="/users" component={People} />
      <Route exact path="/superreports" component={Reports} />
    </Switch>
    <Footer />
  </Router>
);

export default AppRouter;
