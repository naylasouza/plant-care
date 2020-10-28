import React, { Component } from "react"
import About from "./components/about/about"
import Menu from "./components/navbar/navbar";


class App extends Component {
  render(){
    return (
     <section className="teste">
       <Menu />
       <About/>

     </section> 
      
    );
  }

  }

export default App;
