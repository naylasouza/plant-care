import React, { Component } from "react"
import About from "./components/about/about"
import CardPlants from "./components/card-plants/card-plants";
import CardBtn from "./components/cardBtn/cardBtn";
import Menu from "./components/navbar/navbar";


class App extends Component {
  render(){
    return (
     <section className="teste">
       <Menu />
       <About/>
      <CardPlants/>
      <CardBtn/>
     </section> 
      
    );
  }

  }

export default App;
