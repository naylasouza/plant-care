import React, { Component } from "react";
import Icon4 from "../../assets/img/icons/planta4.svg";
import Icon1 from "../../assets/img/icons/home-person.svg";
import Icon2 from "../../assets/img/icons/planta1.svg";
import Icon3 from "../../assets/img/icons/planta2.svg";
import "./iconsCardPlants.css";

class IconsCardPlants extends Component {
  render() {
    return (
      <div className="icons">
        <img src={Icon4} alt="" />
        <img src={Icon2} alt="" />
        <img src={Icon1} alt="" />
        <img src={Icon3} alt="" />
      </div>
    );
  }
}

export default IconsCardPlants;
