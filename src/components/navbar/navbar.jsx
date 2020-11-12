import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/img/logo.png";
import "./navbar.css"



class Menu extends Component {
    render() {
        return (
            
            <nav className="navbar">
                    <div className="logo_img">
                        <img src={Logo}></img>
                    </div>
                        
                    <ul className="navbar_itens">
                    <li ><Link to="/sobre">Sobre</Link></li>
                    <li ><Link to="/colaboradores">Colaboradores</Link></li>
                     </ul>
                
            </nav>

       
        )
    }
}
export default Menu;