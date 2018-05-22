import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="home">
    <div className="content">
      <div>
        <p className="home__brand">Project</p>
        <p className="home__intro home__intro--top">
          Subset of UI and functionality
        </p>
        <p className="home__intro home__intro--bottom">
          of Project TAB from Timely Dashboard
        </p>
      </div>

      <Link to="/projects/dashboard" className="enter-button">
        Enter
      </Link>
    </div>
  </div>
);

export default Home;
