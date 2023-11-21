import React, { Component } from 'react'

export default class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {
            children: this.props.children || "ALERT NIC-0300: Não foi passado conteúdo para o Componente!"
        };
    }
    render() {
        return (
            <div id='section'>
                {this.state.children}
            </div>            
        )
    }
}
