import React from "react";

import { data } from "../../datas/data";
import HostInfo from "../Host_Info";
import Stars from "../Star";

import "../../styles/Carrousel.css";

class LogementInfo extends React.Component {
  render() {
    let id = this.props.id;

    return (
      <div className="logement__info">
        <div className="logement__globalinfo">
          <h1>{data[id].title}</h1>
          <h2 className="logement__localisation">{data[id].location}</h2>
          <div className="logement__tags">
            {data[id].tags.map((tag, key) => {
              return <p key={key}>{tag}</p>;
            })}
          </div>
        </div>

        <div className="logement__hostinfo">
          <HostInfo id={id} />

          <div className="logement__ratings">
            <Stars count={data[id].rating} width="30px" height="30px" />
          </div>
        </div>
      </div>
    );
  }
}

export default LogementInfo;
