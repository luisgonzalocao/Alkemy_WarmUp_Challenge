import React from "react";
import { withRouter } from "react-router-dom";
import { NavItem } from "reactstrap";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            Blog App Client
          </a>
            <ul className="navbar-nav mr-auto">
            </ul>
            <ul className="navbar-nav">
              <NavItem className="nav-link">
                <a className="nav-link" href="/">
                    Home
                </a>
              </NavItem>
            </ul>
          </div>
      </nav>
    </div>
  );
};

export default withRouter(Header);
