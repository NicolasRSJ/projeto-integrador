import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../Style/Components/Form.css'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formFilds: props.formFilds
        };
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ ...this.state, [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();

    }

    render() {
        return (
           <form id='form-container' onSubmit={this.handleSubmit}>
                {this.state.formFilds.map((field, index) => (
                    <div key={index}>
                        <label htmlFor={field.name}>{field.label}</label>
                        <input
                            type={field.type}
                            id={field.name}
                            name={field.name}
                            onChange={this.handleInputChange}
                        />
                    </div>
                )) || 'Erro NIC-0100: Dados dos Input não reconhecidos.'}
                <button type='submit'>Buscar</button>
           </form>
        );
    }
}

// Declaração de Tipo
Form.propTypes = {
    formFilds: PropTypes.array
};

export default Form;