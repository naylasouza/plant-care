import React, { Component } from "react"
import About from "./components/about/about"
import CardPlants, { VerMais } from "./components/cardPlants/card-plants";
import Footer from "./components/footer/footer";
import IconsCardPlants from "./components/iconsCardPlants/iconsCardPlants";
import Menu from "./components/navbar/navbar";
import CardImage from "./components/image/imagens";
import Nameimage from "./components/title/title";
import Json from "../src/components/data/infoPlants.json"




class App extends Component {
  render() {
    const teste = Json.infoPlants[0]
    console.log(teste);
    return (
      <section className="teste">
        <Menu />
        <About />

        <section className="card-container" >
      {
        <CardPlants > <CardImage image={teste.image} /> <Nameimage title={teste.name} /> <VerMais Link={teste.link} />  </CardPlants>
      }
        </section>

        <IconsCardPlants />
        <Footer />
      </section>

    );
  }

}

export default App;
