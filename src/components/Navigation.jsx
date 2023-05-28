import React from "react";
import { NavLink } from "react-router-dom";


function Navigation() {
  return (
    <div className="navigation pt-3">
      <nav className="navbar navbar-expand navbar-light bg-transparent">
        <div className="container">
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
                <NavLink className="nav-link" to="/skills">
                  Skills
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
               {/* <li className="nav-item">
                <NavLink className="nav-link" to="/scroll">
                  Scroll
                </NavLink>
              </li>
               <li className="nav-item">
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
