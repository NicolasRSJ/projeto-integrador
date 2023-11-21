import React, { Component } from 'react';
import '../Style/Components/Container.css'

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            children: this.props.children || "ALERT NIC-0300: Não foi passado conteúdo para o Componente!"
        };
    }

    render() {
        return (
            <div id='container'>
                {this.state.children}
            </div>
        );
    }
}

export default Container;