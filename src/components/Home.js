import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="content">
          <div>
            <p className="home__brand">Timely</p>
            <p className="home__intro">Replicate the Projects TAB</p>
          </div>

          <Link to="/projects/dashboard" className="enter-button">
            Enter
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
