import React from "react";
import { NavLink } from "react-router-dom";

import siieLogo from "../img/SIIE.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu left">
        <li>
          <NavLink to="/" className="nav-link" activeClassName="active">
            INICIO
          </NavLink>
        </li>
      </ul>

      <div className="navbar-logo">
        <img src={siieLogo} alt="SIIE Logo" />
      </div>

      <ul className="navbar-menu right">
        <li>
            <NavLink  to="/SEDUC" className="nav-link"activeClassName="active" >
            SEDUC
          </NavLink>
        </li>
        <li>
            <NavLink  to="/INFOP" className="nav-link" activeClassName="active" >
            INFOP
          </NavLink>
        </li>
        <li>
            <NavLink  to="/CONEANFO" className="nav-link" activeClassName="active" >
            CONEANFO
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
