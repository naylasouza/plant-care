import React, { Component } from 'react';
import Logo from "../../assets/img/logo.png";
import "./navbar.css"


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