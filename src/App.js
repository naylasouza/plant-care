import React, { Component } from "react";
import About from "./components/about/about";
import CardPlants from "./components/cardPlants/cardPlants";
import Footer from "./components/footer/footer";
import IconsCardPlants from "./components/iconsCardPlants/iconsCardPlants";
import Menu from "./components/navbar/navbar";
import CardImage from "./components/image/imagens";
import Nameimage from "./components/title/title";
import json from "../src/components/data/infoPlants.json";
import LinkPlants from "./components/linkPlants/linkPlants";
import CardContainer from "./components/cardPlants/cardContainer";

class App extends Component {
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

        <div className="card-container">
          <div >
        {json.infoPlants.map((plantInfo) => (
          <CardPlants >
            <CardImage image={plantInfo.image} />
            <Nameimage title={plantInfo.name} />
            <LinkPlants link={plantInfo.link}> Ver mais</LinkPlants>


          </CardPlants>
         ))}
        </div>
        </div>
        <IconsCardPlants />
        <Footer />

      </div>
    );
  }
}



export default App;
