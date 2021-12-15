import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/Header_logo.png";
import "../../styles/Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <img src={logo} alt="" />
        <nav className="navbar">
          <NavLink to="/" exact className="link">
            Accueil
          </NavLink>
          <NavLink to="/A_propos" exact className="link">
            A Propos
          </NavLink>
        </nav>
      </div>
    );
  }
}

export default Header;
