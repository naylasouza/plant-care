import React, { Component } from "react"
import About from "./components/about/about"
import CardPlants, { Vermais } from "./components/card-plants/card-plants";
import Footer from "./components/footer/footer";
import IconsCardPlants from "./components/iconsCardPlants/iconsCardPlants";
import Menu from "./components/navbar/navbar";
import Planta1 from "../src/assets/img/cards_plants/calathea-triostar.jpg";
import CardImage from "./components/imagens/imagens";
import Nameimage from "./components/titulo/title";



class App extends Component {
  render() {
    return (
      <section className="teste">
        <Menu />
        <About />

        <section className="card-container" >

          <CardPlants > <CardImage image={Planta1} /> <Nameimage title={"Nome da Planta"} /> <Vermais>teste</Vermais> </CardPlants>
          <CardPlants > <CardImage image={Planta1} /> <Nameimage title={"Nome da Planta"} /> <Vermais>teste</Vermais> </CardPlants>
          <CardPlants > <CardImage image={Planta1} /> <Nameimage title={"Nome da Planta"} /> <Vermais>teste</Vermais> </CardPlants>
          <CardPlants > <CardImage image={Planta1} /> <Nameimage title={"Nome da Planta"} /> <Vermais>teste</Vermais> </CardPlants>
          <CardPlants > <CardImage image={Planta1} /> <Nameimage title={"Nome da Planta"} /> <Vermais>teste</Vermais> </CardPlants>
          <CardPlants > <CardImage image={Planta1} /> <Nameimage title={"Nome da Planta"} /> <Vermais>teste</Vermais> </CardPlants>
          <CardPlants > <CardImage image={Planta1} /> <Nameimage title={"Nome da Planta"} /> <Vermais>teste</Vermais> </CardPlants>
          <CardPlants > <CardImage image={Planta1} /> <Nameimage title={"Nome da Planta"} /> <Vermais>teste</Vermais> </CardPlants>

        </section>

        <IconsCardPlants />
        <Footer />
      </section>

    );
  }

}

export default App;
