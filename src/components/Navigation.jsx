import React from "react";
import { NavLink } from "react-router-dom";
//import Person from './Person'

function Navigation() {
  return (
    
    
    
    
    
    
    <div className="navigation">
<nav className="navbar navbar-expand-lg navbar-light bg-transparent">
  <button class="navbar-toggler mb-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto">
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
                <NavLink className="nav-link" to="/patterns">
                  Patterns
                </NavLink>
              </li> 
              <li className="nav-item">
                <NavLink className="nav-link" to="/skills">
                  Skills
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/resume">
                  Resume
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
