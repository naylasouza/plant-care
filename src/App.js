import React, { Component } from "react"
import About from "./components/about/about"
import CardPlants, { Vermais } from "./components/card-plants/card-plants";
import Footer from "./components/footer/footer";
import IconsCardPlants from "./components/iconsCardPlants/iconsCardPlants";
import Menu from "./components/navbar/navbar";
import Planta1 from "../src/assets/img/cards_plants/calathea-triostar.jpg";
import Btn from "./components/button/button";

// import plant2 from "../../assets/img/cards_plants/calathea-triostar.jpg";
// import plant3 from "../../assets/img/cards_plants/ficus-lyrata.jpg";
// import plant4 from "../../assets/img/cards_plants/lucky-bamboo.jpg";
// import plant5 from "../../assets/img/cards_plants/monstera-deliciosa.png";
// import plant6 from "../../assets/img/cards_plants/pilea-peperomioides.jpg";
// import plant7 from "../../assets/img/cards_plants/ponytail-palm.jpg";
// import plant8 from "../../assets/img/cards_plants/succulent-bowl-large.jpg";
// import plant9 from "../../assets/img/cards_plants/euphorbia-eritrea.jpg";





class App extends Component {
  render() {
    return (
      <section className="teste">
        <Menu />
        <About />
        <section className="card-container" >
          

        <CardPlants  image={Planta1} > <Vermais>testeeee</Vermais> </CardPlants>

        <CardPlants image={Planta1} />
        <CardPlants image={Planta1}/>
        <CardPlants image={Planta1} />
        
      
        </section>
        

        <IconsCardPlants/>
        <Footer/>
      </section>

    );
  }

}

export default App;
