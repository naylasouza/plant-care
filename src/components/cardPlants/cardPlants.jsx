import styled from "styled-components";

const CardPlants = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: white;
    width: 100%;
    max-width: 30vh;
    border: solid white 1px;
    margin: 2%;
    border-radius: 10%;
    padding-bottom: 4%;

    
    /* background-color: ${(props) => `${props.background}`};  */
`;
export const VerMais = styled.div`
  border: 30px;
  background: #28df99;
  padding: 5%;
  width: 43%;
  display: flex;
  justify-content: center;
  border-radius: 10%;
`;

export default CardPlants;
