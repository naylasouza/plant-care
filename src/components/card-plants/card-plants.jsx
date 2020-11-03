import React, { Component } from "react";
import plant1 from "../../assets/img/cards_plants/bunny-ears-cacti.jpg";
import plant2 from "../../assets/img/cards_plants/calathea-triostar.jpg";
import plant3 from "../../assets/img/cards_plants/ficus-lyrata.jpg";
import plant4 from "../../assets/img/cards_plants/lucky-bamboo.jpg";
import plant5 from "../../assets/img/cards_plants/monstera-deliciosa.png";
import plant6 from "../../assets/img/cards_plants/pilea-peperomioides.jpg";
import plant7 from "../../assets/img/cards_plants/ponytail-palm.jpg";
import plant8 from "../../assets/img/cards_plants/succulent-bowl-large.jpg";
import plant9 from "../../assets/img/cards_plants/euphorbia-eritrea.jpg";

import "./card-plants.css";

class CardPlants extends Component {
  render() {
    return (
      <section className="card-container" >
        
          <div className="card-1">
            <div className="card-item">
              <img className="card-item--img" src={plant1} alt="aaaa" />
              <h3 className="card-item--title">bunny-ears-cacti</h3>
              <a
                className="btn"
                href="https://pt.wikipedia.org/wiki/Cacti"
                target="blank"
              >
                Ver mais
              </a>
            </div>
            <div className="card-item">
              <img className="card-item--img" src={plant2} alt="aaaa" />
              <h3 className="card-item--title">calathea-triostar</h3>
              <a
                className="btn"
                href="https://pt.wikipedia.org/wiki/Cacti"
                target="blank"
              >
                Ver mais
              </a>
            </div>
            <div className="card-item">
              <img className="card-item--img" src={plant3} alt="aaaa" />
              <h3 className="card-item--title">ficus-lyrata</h3>
              <a
                className="btn"
                href="https://pt.wikipedia.org/wiki/Cacti"
                target="blank"
              >
                Ver mais
              </a>
            </div>
          </div>

          <div className="card-2">
            <div className="card-item">
              <img className="card-item--img" src={plant4} alt="aaaa" />
              <h3 className="card-item--title">lucky-bamboo</h3>
              <a
                className="btn"
                href="https://pt.wikipedia.org/wiki/Cacti"
                target="blank"
              >
                Ver mais
              </a>
            </div>
            <div className="card-item">
              <img className="card-item--img" src={plant5} alt="aaaa" />
              <h3 className="card-item--title">monstera-deliciosa</h3>
              <a
                className="btn"
                href="https://pt.wikipedia.org/wiki/Cacti"
                target="blank"
              >
                Ver mais
              </a>
            </div>
            <div className="card-item">
              <img className="card-item--img" src={plant6} alt="aaaa" />
              <h3 className="card-item--title">pilea-peperomioides</h3>
              <a
                className="btn"
                href="https://pt.wikipedia.org/wiki/Cacti"
                target="blank"
              >
                Ver mais
              </a>
            </div>
          </div>

          <div className="card-3" id="cardsPlants" >
            <div className="card-item">
              <img className="card-item--img" src={plant7} alt="aaaa" />
              <h3 className="card-item--title">ponytail-palm</h3>
              <a
                className="btn"
                href="https://pt.wikipedia.org/wiki/Cacti"
                target="blank"
              >
                Ver mais
              </a>
            </div>
            <div className="card-item">
              <img className="card-item--img" src={plant8} alt="aaaa" />
              <h3 className="card-item--title">succulent-bowl-large</h3>
              <a
                className="btn"
                href="https://pt.wikipedia.org/wiki/Cacti"
                target="blank"
              >
                Ver mais
              </a>
            </div>
            <div className="card-item">
              <img className="card-item--img" src={plant9} alt="aaaa" />
              <h3 className="card-item--title">euphorbia-eritrea</h3>
              <a
                className="btn"
                href="https://pt.wikipedia.org/wiki/Cacti"
                target="blank">
                Ver mais
              </a>
            </div>
          </div>
        
      </section>
    );
  }
}

export default CardPlants;
