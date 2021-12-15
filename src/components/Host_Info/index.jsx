import React from "react";

import { data } from "../../datas/data";

import "../../styles/HostInfo.css";

class HostInfo extends React.Component {
  render() {
    let id = this.props.id;
    let name = data[id].host.name.split(" ");
    return (
      <div className="logement__host">
        <div className="logement__host__name">
          <h2>{name[0]}</h2>
          <h2>{name[1]}</h2>
        </div>
        <img src={data[id].host.picture} alt={"image de " + data[id].host.name} />
      </div>
    );
  }
}

export default HostInfo;
