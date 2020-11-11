import React, { Component } from "react";
import { VerMais } from "../cardPlants/cardPlants";

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


export default LinkPlants;
