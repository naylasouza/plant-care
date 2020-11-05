import React, { Component } from "react";
import styled from 'styled-components'


import "./card-plants.css";


const CardPlants = styled.button`
 display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: white;
    max-width: 100%;
     width: 24%;  
    border: solid white 1px;
    margin: 1%;
    border-radius: 10%;
    padding-bottom: 3%; 
background-color: ${props => `${props.background}`};
background-image: ${props => `url(${props.image})`};
`

export default CardPlants
 
// class CardPlants extends Component {
//   render() {
//     return (
      
        
//           <div className="card-1">
//             <div className="card-item">
//               <img className="card-item--img" src={plant1} alt="aaaa" />
//               <h3 className="card-item--title">bunny-ears-cacti</h3>
//               <a
//                 className="btn"
//                 href="https://pt.wikipedia.org/wiki/Cacti"
//                 target="blank"
//               >
//                 Ver mais
//               </a>
//             </div>
//           </div>
//     );
//   }
// }

// export default CardPlants;
