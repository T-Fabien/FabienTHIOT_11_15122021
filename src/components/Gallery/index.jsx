import React from "react";
import { Link } from "react-router-dom";

import { data } from "../../datas/data";
import "../../styles/Gallery.css";

class Gallery extends React.Component {
  render() {
      let i = -1;
    return (
        <div className="gallery">
            {data.map((data, key) => {
                i++;
                let link = "/logement/" + i
              return (
                <div className="gallery__card" key={key}>
                    <Link to={link}>
                    <img src={data.cover} alt={data.title} />
                    <h2>{data.title}</h2>
                    </Link>
                </div>
              );
            })}
          </div>
      );
  }
}

export default Gallery;
