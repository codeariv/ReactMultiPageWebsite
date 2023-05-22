import React from "react";
import { NavLink } from "react-router-dom";


function Navigation() {
  return (
    <div className="navigation pt-3">
      <nav className="navbar navbar-expand navbar-light bg-transparent">
        <div className="container">
          {/* <NavLink className="navbar-brand" to="/">
          David Melkonian - UI Pro
          </NavLink> <span class="nav-brand-text">Dave M &trade;</span>*/}
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/samples">
                  Samples
                </NavLink>
              </li> 
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/blog">
                  Blog
                </NavLink>
              </li> */}
            </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
