import React from "react";
import { Link, withRouter } from "react-router-dom";
import { NavItem } from "reactstrap";




const Header = ({history}) => {
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
                <Link className="nav-link" to="/addPost">
                    Registrar nuevo Post
                </Link>
              </NavItem>
            </ul>
          </div>
      </nav>
    </div>
  );
};

export default withRouter(Header);
