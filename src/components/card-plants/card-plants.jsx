import React, { Component } from "react";
import plant1 from "../../assets/img/cards_plants/bunny-ears-cacti.jpg";
import plant2 from "../../assets/img/cards_plants/calathea-triostar.jpg";
import plant3 from "../../assets/img/cards_plants/ficus-lyrata.jpg";
import "./card-plants.css";

class CardPlants extends Component {
  render() {
    return (
      <section className="card-container">
        <div className="card">
          <div className="card-item">
            <img className="card-item--img" src={plant1} alt="aaaa" />
            <h3>Nome da Planta</h3>
            <button
              className="btn"
              href="https://pt.wikipedia.org/wiki/Cacti"
              target="blank"
            >
              Ver mais
            </button>
          </div>
          <div className="card-item">
            <img className="card-item--img" src={plant2} alt="aaaa" />
            <h3>Nome da Planta</h3>
            <button
              className="btn"
              href="https://pt.wikipedia.org/wiki/Cacti"
              target="blank"
            >
              Ver mais
            </button>
          </div>
          <div className="card-item">
            <img className="card-item--img" src={plant3} alt="aaaa" />
            <h3>Nome da Planta</h3>
            <button
              className="btn"
              href="https://pt.wikipedia.org/wiki/Cacti"
              target="blank"
            >
              Ver mais
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default CardPlants;
