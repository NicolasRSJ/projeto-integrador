import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../Style/Components/Table.css';

class Table extends Component {
    render() {

        const dadosSimulados = [
            { id: 1, nome: 'Item 1', descricao: 'Descrição do Item 1', preco: 100 },
            { id: 2, nome: 'Item 2', descricao: 'Descrição do Item 2', preco: 150 },
            { id: 3, nome: 'Item 3', descricao: 'Descrição do Item 3', preco: 200 },
         ];

        const colunas = dadosSimulados.length > 0 ? Object.keys(dadosSimulados[0]) : [];

        return (
            (
                <table>
                    <thead>
                        <tr>
                            {colunas.map(coluna => (
                                <th key={coluna}>{coluna}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {dadosSimulados.map((item, index) => (
                            <tr key={index}>
                                {colunas.map(coluna => (
                                    <td key={coluna}>{item[coluna]}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) || <div />
        );
}
}

Table.propTypes = {

};

export default Table;