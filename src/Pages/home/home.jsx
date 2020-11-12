import React, { Component } from "react";
import About from "../../components/about/about";
import CardPlants from "../../components/cardPlants/cardPlants";
import Footer from "../../components/footer/footer";
import IconsCardPlants from "../../components/iconsCardPlants/iconsCardPlants";
import Menu from "../../components/navbar/navbar";
import CardImage from "../../components/image/imagens";
import Nameimage from "../../components/title/title";
import json from "../../../src/components/data/infoPlants.json";
import LinkPlants from "../../components/linkPlants/linkPlants";
import styled from "styled-components";



const CardContainer = styled.div`
  background-color: #f6f7d4;
  margin-top: 4rem;
  padding: 2%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media (min-width: 736px) {
    flex-wrap: wrap;
  }
  @media (max-width: 1225px) {
    /* justify-content: flex-start; */
    align-items: center;
  }
`;


class Home extends Component {
  render() {
    return (
      <div>
        
        <Menu />
        <About />

        <CardContainer>
          {json.infoPlants.map((plantInfo) => (
            <CardPlants>
              <CardImage image={plantInfo.image} />
              <Nameimage title={plantInfo.name} />
              <LinkPlants link={plantInfo.link}> Ver mais</LinkPlants>
            </CardPlants>
          ))}
        </CardContainer>
        
        <IconsCardPlants />
        <Footer />
      </div>
    );
  }
}

export default Home;
