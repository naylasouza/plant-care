import React, { Component } from "react";
import { VerMais } from "../cardPlants/card-plants";

class LinkPlants extends Component {
  render() {
    return (
      <div>
        <VerMais>{this.props.Link}</VerMais>
      </div>
    );
  }
}

export default LinkPlants;
