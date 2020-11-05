import React, { Component } from 'react';
import Logo from "../../assets/img/logo.png";
import styled from 'styled-components';
import "./navbar.css"

const ul = styled.ul`
@media (max-width: 500px){
    display:none;
    flex-flow: column nowrap;
    background-color: red;
    position:fixed;
    top:0;
    height: 300px;
    padding-top: 3.5rem;

    li{
        color: white
    }
}
`
class Menu extends Component {
    render(){
        return (
            <nav className="navbar">
                <div className="logo_img">
                    <img src={Logo}></img>
                </div>
                <ul className="navbar_itens">
                    <li >Sobre</li>
                    <li>Cuidados</li>
                    <li >Contato</li>
                </ul>
                
        
            </nav>
        )
    }
}
export default Menu;