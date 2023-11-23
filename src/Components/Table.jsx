import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../Style/Components/Table.css';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            medicamentos: []
        }
    }
    
    render() {

        const {medicamentos} = this.state;

        const colunas = medicamentos.length > 0 ? Object.keys(medicamentos[0]) : [];

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
                        {medicamentos.map((item, index) => (
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