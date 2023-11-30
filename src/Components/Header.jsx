import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../Style/Components/Header.css'
import logoPrefeitura from '../Image/Logo Prefeitura.png';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            codigo: '1591988',
            usuario: 'FARMACIA',
            nomeAba: this.props.nomeAba
        }
    }

    render() {
        return (
            <div className='header'>
                <div className='header-content'>
                    <img src={logoPrefeitura} alt='Logo da Prefeitura de Vitória' className='header-content-img' />
                    <div className='header-content-info'>
                        <p>Código da Unidade: {this.state.codigo}</p>
                        <p>Usuário: {this.state.usuario}</p>
                    </div>
                </div>
                <div className='header-bar'>
                    <p className='title-bar'>{this.state.nomeAba || "ERRO NIC-0200: Nome da Aba não informado!"}</p>
                </div>
            </div>
        );
    }
}

// Declaração de Tipo
Header.propTypes = {
    codigo: PropTypes.string,
    usuario: PropTypes.string,
    nomeAba: PropTypes.string
};

export default Header;