import React from "react";

import Intro from "../../components/Intro";
import Accordion from "../../components/Accordion";

import AProposImg from "../../assets/A_Propos_First_Sec_img.png";
import { faqs } from "../../datas/faq";

import "../../styles/Propos.css";

class A_Propos extends React.Component {
  render() {
    return (
      <div className="main">
        <Intro img={AProposImg} />
        <div className="accordion__section">
          {faqs.map((data, key) => {
            return <Accordion title={data.title} text={data.text} />;
          })}
        </div>
      </div>
    );
  }
}

export default A_Propos;
