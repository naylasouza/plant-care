import React, { Component } from 'react';
import styled from 'styled-components';

const styleburguer = styled.div`
width:2rem;
height:2rem;
position:fixed;
top: 15px;
right:20px;
justify-content:space-around;
flex-flow:column


div{
    width:2rem;
    height: 0,25rem;
    background-color:#0333
}

`;
class Burguer extends Component{
    render(){
        return(
            <styleburguer>
                <div></div>
                <div></div>
                <div></div>
            </styleburguer>
        )
    }
}
export default Burguer