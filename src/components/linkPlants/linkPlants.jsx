import React, { Component } from "react";
import { VerMais } from "../cardPlants/cardPlants";
import styled from "styled-components";

const Link = styled.a`
  text-decoration: none;
`


class LinkPlants extends Component {
  render() {
    return (
      <VerMais>
        
        <Link href= {this.props.link} target="_blank">
          {this.props.children}
        </Link>
         
      </VerMais>
    );
  }
}


export default LinkPlants;
