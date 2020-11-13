import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/img/logo.png";
import styled from "styled-components";

const NavBar = styled.nav`
    background-color: #f9f9f9;
    display: flex;
    justify-content: space-between;
    
`
const NavBarItens = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 6%;
    list-style-type: none;
    
`
const LogoImg = styled.img`
    width:100%;
    max-width: 150px;
    
`
const ItensLi = styled.li`
    padding: 5%;
    
    
`
const Links = styled.a`
  text-decoration: none;  
    
    
`

class Menu extends Component {
    render() {
        return (
            
            <NavBar>
                    <div>
                        <LogoImg src={Logo}></LogoImg>
                    </div>
                        
                    <NavBarItens>
                    <ItensLi ><Link to="/sobre">Sobre</Link></ItensLi>

                    <ItensLi ><Link to="/colaboradores">Colaboradores</Link></ItensLi>
                     </NavBarItens>
                
            </NavBar>

       
        )
    }
}
export default Menu;