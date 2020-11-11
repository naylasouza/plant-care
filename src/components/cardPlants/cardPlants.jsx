
import React, { Component } from 'react';
import styled from 'styled-components';

 import "./cardPlants.css";


const CardPlants = styled.div`
    /* display: flex; */
    justify-content: center;
    align-items: center;
    /* flex-direction: row; */
    background-color: white;
    width: 20%;  
    max-width: 520px;
    border: solid white 1px;
    margin: 1%;
    border-radius: 10%;
    padding-bottom: 4%; 
    background-position: top center;
    background-color: ${props => `${props.background}`};
`
export const VerMais = styled.div`
border: 30px;
    background: #28DF99;
    padding: 5%;
    width: 43%;
    display: flex;
    justify-content: center;
    border-radius: 10%;`

export default CardPlants

