import { Component } from 'react';
import axios from 'axios'; // Certifique-se de ter o axios instalado no seu projeto (npm install axios)

class MinhaComponente extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dados: null,
            error: null
        };
    }

    componentDidMount() {
        // Use a URL passada nos parâmetros da classe
        const { postUrl, postDados } = this.props;

        axios.post(postUrl, postDados)
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
        const { postDados, error } = this.state;


        if (error) {
            console.log(`Erro NIC-0401: Erro na requisição. \n ${error.message}`);
        }

        if (!postDados) {
            console.log("Erro NIC-0501: Dados não foram enviados ou não houve resposta.");
        }

        return JSON.stringify(postDados, null, 2)
    }
}

export default MinhaComponente;
