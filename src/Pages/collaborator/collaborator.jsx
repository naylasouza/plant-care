import React, { Component } from "react";
import Menu from "../../components/navbar/navbar";
import Api from "../../api";


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
                <h1>Aqui é um colaborador</h1>
                {console.log(colaboradores)}
                {colaboradores.map(colaborador => (
                    <li key={colaborador.id}>

                        <p> <strong>Nome do colaborador:</strong>{colaborador.employee_name}</p>
                        <p> <strong>Salário:</strong>{colaborador.employee_salary}</p>
                        <p> <strong>Idade:</strong>{colaborador.employee_age}</p>

                    </li>
                ))}
            </div>
        )
    }
}

export default Collaborator;