
import React, { Component } from 'react';
import styled from 'styled-components';

 import "./card-plants.css";


const CardPlants = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background-color: white;
    /* max-width: 100%; */
    width: 24%;  
    border: solid white 1px;
    margin: 1%;
    border-radius: 10%;
    padding-bottom: 34%; 
    background-repeat: no-repeat;
    background-color: ${props => `${props.background}`};
    background-image: ${props => `url(${props.image})`};

    
`
export const Vermais = styled.div`
border: 30px;
    background: #28DF99;
    padding: 5%;
    width: 43%;
    display: flex;
    justify-content: center;
    border-radius: 10%;`

export default CardPlants
// class CardPlants extends Component {
//   render() {
//     return (
      
        
//           <div className="card-1">
//             <div className="card-item">
//              
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
