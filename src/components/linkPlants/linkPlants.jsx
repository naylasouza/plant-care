import React, { Component } from "react";
import { VerMais } from "../cardPlants/card-plants";

class LinkPlants extends Component {
  render() {
    return (
      <VerMais>
        
        <a href= {this.props.link} target="_blank">
          {this.props.children}
        </a>
         
      </VerMais>
    );
  }
}
console.log("blzz")

export default LinkPlants;
