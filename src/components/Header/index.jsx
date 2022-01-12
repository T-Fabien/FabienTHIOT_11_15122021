import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/Header_logo.png";
import "../../styles/Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <img src={logo} alt="Logo de Kasa" />
        <nav className="navbar">
          <NavLink to="/" end className="link">
            Accueil
          </NavLink>
          <NavLink to="/A_propos" end className="link">
            A Propos
          </NavLink>
        </nav>
      </div>
    );
  }
}

export default Header;
