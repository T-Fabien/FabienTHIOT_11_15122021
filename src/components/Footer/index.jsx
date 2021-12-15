import React from "react";
import logo_white from "../../assets/White_logo.png";

import '../../styles/Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <img src={logo_white} alt="" />
          <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    );
  }
}

export default Footer;
