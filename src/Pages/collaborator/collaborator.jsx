import React, { Component } from "react";
import Menu from "../../components/navbar/navbar";
import Api from "../../api";

import styled from "styled-components";
import Footer from "../../components/footer/footer";
import IconsCardPlants from "../../components/iconsCardPlants/iconsCardPlants";



const BodyCollaborator = styled.div`
background-color:#f6f7d4;
    
`
const Title = styled.h1`
    display: flex;
    justify-content: center;
`

const CardApi = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:#cacaca;
    margin: 2%;
    flex-direction: column;
`
const ItemdApi = styled.p`
    display: flex;
    
`

class Collaborator extends Component {

    state = {
        colaboradores: [],

    }

    async componentDidMount() {
        const response = await Api.get('');
        this.setState({ colaboradores: response.data.data })
    }
    render() {

        const { colaboradores } = this.state;
        return (
            <BodyCollaborator>
                <Menu />
                <Title>Colaboradores</Title>
                {console.log(colaboradores)}
                {colaboradores.map(colaborador => (
                    <CardApi key={colaborador.id}>

                        <ItemdApi> Nome do colaborador:{colaborador.employee_name}</ItemdApi>
                        <ItemdApi> Salário:{colaborador.employee_salary}</ItemdApi>
                        <ItemdApi> Idade:{colaborador.employee_age}</ItemdApi>

                    </CardApi>
                ))}
                <IconsCardPlants/>
                <Footer/>
            </BodyCollaborator>
        )
    }
}

export default Collaborator;