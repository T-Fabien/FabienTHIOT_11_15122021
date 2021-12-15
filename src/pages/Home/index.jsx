import React from "react";
import Intro from "../../components/Intro";
import Gallery from "../../components/Gallery";

import HomeIntroImg from "../../assets/Home_First_Sec_img.png";

class Home extends React.Component {
    render() {
  return (
    <div className="main">
      <Intro img={HomeIntroImg} text="Chez vous, partout et ailleurs" />
      <Gallery />
    </div>
  );
};
}

export default Home;
