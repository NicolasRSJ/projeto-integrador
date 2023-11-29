import React, { Component } from 'react';
import '../Style/Components/NavigationBar.css'

export default class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            children: this.props.children || "ALERT NIC-0300: Não foi passado conteúdo para o Componente!"
        };
    }

    render() {
        return (
            <div id='navigation-bar'>
                {this.state.children}
            </div>
        );
    }
}