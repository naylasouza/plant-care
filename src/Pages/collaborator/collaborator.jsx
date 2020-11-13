import React, { Component } from "react";
import Menu from "../../components/navbar/navbar";
import Api from "../../api";
import styled from "styled-components";

const Title = styled.h1`
    display: flex;
    justify-content: center;
`

const CardApi = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:#bad3da;
    margin: 2%;
`
const ItemdApi = styled.p`
    display: flex;
    flex-direction: column;
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
            <div>
                <Menu />
                <Title>Colaboradores</Title>
                {console.log(colaboradores)}
                {colaboradores.map(colaborador => (
                    <CardApi key={colaborador.id}>

                        <ItemdApi> <strong>Nome do colaborador:</strong>{colaborador.employee_name}</ItemdApi>
                        <ItemdApi> <strong>Salário:</strong>{colaborador.employee_salary}</ItemdApi>
                        <ItemdApi> <strong>Idade:</strong>{colaborador.employee_age}</ItemdApi>

                    </CardApi>
                ))}
            </div>
        )
    }
}

export default Collaborator;