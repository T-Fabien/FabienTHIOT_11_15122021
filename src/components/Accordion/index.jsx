import React from "react";

import Chevron from "../Chevron";

import "../../styles/Accordion.css";

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }
  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  render() {
    return (
      <div className="accordion__item">
        <div className="accordion__question">
          <button onClick={this.toggleClass.bind(this)}>
            <p className={"accordion__title"}>{this.props.title}</p>
            <Chevron className={this.state.active ? "chevron chevron_rotate" : "chevron chevron_norotate"} width={20} fill={"white"} />
          </button>
        </div>

        <div
          className={
            this.state.active ? "accordion__content_active" : "accordion__content_isnotactive"
          }
        >
          <div className="accordion__text">{this.props.text}</div>
        </div>
      </div>
    );
  }
}

export default Accordion;
