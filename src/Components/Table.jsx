import React, { useState, useEffect } from 'react';
import '../Style/Components/Table.css';
import { useContext } from 'react'
import { SearchContext } from '../Context'
import axios from 'axios';

const Table = (props) => {
    const { dataSurvey, statusMessage, setStatusMessage } = useContext(SearchContext)
    const [medicamentos, setMedicamento] = useState([])

    useEffect(() => {
        if (dataSurvey.busca !== false) {
            var params = '';
            if (props.apiUrl === 'http://localhost:3001/medicamentos/consultar/') {
                params = dataSurvey.codigo_medicamento !== undefined ? dataSurvey.codigo_medicamento.toUpperCase() : dataSurvey.codigo_medicamento;
            } else if (props.apiUrl === 'http://localhost:3001/medicamentos/outras_unidades/' || props.apiUrl === 'http://localhost:3001/medicamentos/consultar_estoque/') {
                params = `${dataSurvey.id_unidade_atual}/${dataSurvey.quant_desejada}/${
                    dataSurvey.codigo_medicamento !== undefined
                        ? dataSurvey.codigo_medicamento.toUpperCase()
                        : dataSurvey.codigo_medicamento
                }`;
            } else return;

            axios.get(props.apiUrl + params)
                .then(resp => {
                    if (resp.data.length === 0) {
                        setStatusMessage(!statusMessage)
                    }
                    setMedicamento(resp.data)
                    console.log(resp)
                })
                .catch(err => {
                    console.log(err.message);
                })
        } else {
            setMedicamento([]);
        }
    }, [dataSurvey, props.apiUrl])

    const colunas = Object.keys(medicamentos[0] || {}).filter(coluna => !['id', 'createdAt', 'updatedAt', 'id_unidade_saude'].includes(coluna));

    return (
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
    );
};

export default Table;