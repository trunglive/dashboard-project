import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
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
      <div className="new-project">
        <img
          className="new-project__plus-sign-icon"
          src="/icons/plus-sign.svg"
        />
        <span>New project</span>
      </div>
    </div>
  </div>
);

export default Header;
