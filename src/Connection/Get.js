import { Component } from 'react';
import axios from 'axios';

class MetodoGet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dados: null,
            error: null
        };
    }

    componentDidMount() {
        // Use a URL passada nos parâmetros da classe
        const { apiUrl } = this.props;

        axios.get(apiUrl)
            .then(response => {
                this.setState({
                    dados: response.data,
                    error: null
                });
            })
            .catch(error => {
                this.setState({
                    dados: null,
                    error: error.message
                });
            });
    }

    render() {
        const { dados, error } = this.state;

        if (error) {
            console.log(`Erro NIC-0401: Erro na requisição. \n ${error.message}`);
        }

        if (!dados) {
            console.log("Erro NIC-0500: Dados não encontrados.")
        }

        // Renderize os dados recebidos da API
        return JSON.stringify(dados, null, 2)
    }
}

export default MetodoGet;
