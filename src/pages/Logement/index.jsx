import React from "react";

import { data } from "../../datas/data";
import Carrousels from "../../components/Carrousel";
import LogementInfo from "../../components/Logement_Info";
import Accordion from "../../components/Accordion";

import "../../styles/Logement.css";
import Error from "../../components/Error";

class Logement extends React.Component {
  render() {
    let id = window.location.pathname.substring(10);

    if (data[id] === undefined) {
      return <Error />;
    }
    else {
      return (
        <div className="main">
          <section className="logement__section">
            <Carrousels id={id} />
            <LogementInfo id={id} />
            <div className="accordion__description">
              <Accordion title={"Description"} text={data[id].description} />
              <Accordion
                title={"Equipement"}
                text={data[id].equipments.map((equipment, key) => {
                  return <p key={key}>{equipment}</p>;
                })}
              />
            </div>
          </section>
        </div>
      );
    }
  }
}

export default Logement;
