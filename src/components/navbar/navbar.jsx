import React, { Component } from 'react';
import Logo from "../../assets/img/logo.png";
import styled from 'styled-components';
import "./navbar.css"
import { Link, Router } from 'react-router-dom';

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
    render() {
        return (
            <Router>
            <nav className="navbar">
                <div className="logo_img">
                    <img src={Logo}></img>
                </div>
                
                <ul className="navbar_itens">
                    <li >
                        <Link to="/">Sobre</Link>
                        <li>
                            <Link to="cuidados">Cuidados</Link>
                        </li>
                        <li >
                            <Link to="contato">Contato</Link>
                        </li>
                        <li>
                            <Link to="colaborador">Colaboradores</Link>
                        </li>
                </ul>
                
        
            </nav>

            <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </Router>
        )
    }
}
export default Menu;