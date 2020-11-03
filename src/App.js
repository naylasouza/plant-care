import React, { Component } from "react"
import About from "./components/about/about"
import CardPlants from "./components/card-plants/card-plants";
import Footer from "./components/footer/footer";
import IconsCardPlants from "./components/iconsCardPlants/iconsCardPlants";
import Menu from "./components/navbar/navbar";


class App extends Component {
  render() {
    return (
      <section className="teste">
        <Menu />
        <About />
        <CardPlants />
        <IconsCardPlants/>
        <Footer/>
      </section>

    );
  }

}

export default App;
