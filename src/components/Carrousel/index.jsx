import React from "react";

import { data } from "../../datas/data";

import "../../styles/Carrousel.css";

class Carrousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  nextSlide() {
    let current = this.state.current;
    if (current + 1 > data[this.props.id].pictures.length - 1) {
      this.setState({ current: 0 });
    } else {
      this.setState({ current: current+1 });
    }
  }

  prevSlide() {
    let current = this.state.current;

    if (current - 1 < 0) {
      this.setState({ current: data[this.props.id].pictures.length - 1 });
    } else {
      this.setState({ current: current - 1 });
    }
  }

  render() {
    let image_alt ;
    return (
      <section className="carrousel">
        <svg
        className="left-arrow"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          onClick={this.prevSlide.bind(this)}
        >
          <path
            fill="currentColor"
            d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
          ></path>
        </svg>
        <svg
        className="right-arrow"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          onClick={this.nextSlide.bind(this)}
        >
          <path
            fill="currentColor"
            d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
          ></path>
        </svg>
        {data[this.props.id].pictures.map((slide, index) => {
          image_alt = "image de " + data[this.props.id].title
          return (
            <div className={index === this.state.current ? "slide active" : "slide"} key={index}>
              {index === this.state.current && (
                <img src={slide} alt={image_alt} className="image" />
              )}
            </div>
          );
        })}
      </section>
    );
  }
}

export default Carrousel;
