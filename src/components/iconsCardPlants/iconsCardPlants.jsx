import React, { Component } from "react";
import Icongrup from "../../assets/img/icons/grupo_icones.png";

import "./iconsCardPlants.css";

class IconsCardPlants extends Component {
  render() {
    return (
      <div className="icons">
        <img className="icons-item" src={Icongrup} alt="" />
      </div>
    );
  }
}

export default IconsCardPlants;
