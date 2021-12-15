import React from "react";

import '../../styles/Intro.css';

class HomeIntro extends React.Component {
  render() {
    return (
      <div className="intro">
        <img src={this.props.img} alt="" />
        <h1>{this.props.text}</h1>
      </div>
    );
  }
}

export default HomeIntro;
