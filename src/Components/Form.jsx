import React, { useState, useContext, useEffect } from 'react';
import '../Style/Components/Form.css';
import { SearchContext } from '../Context/index'; // Certifique-se de importar o contexto correto


const Form = (props) => {
    const { dataSurvey, setDataSurvey, statusMessage, setStatusMessage } = useContext(SearchContext);
    const [formValues, setFormValues] = useState(dataSurvey);

    useEffect(() => {
        setDataSurvey(formValues);

        if(statusMessage) {
            const timeout = setTimeout(() => {
                setStatusMessage(!statusMessage)
            }, 3000);
    
            console.log(timeout);
    
            return () => clearTimeout(timeout);
        }

    }, [setDataSurvey, formValues,statusMessage, setStatusMessage]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value !== '' ? value : dataSurvey[name]
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setDataSurvey(formValues);
        setDataSurvey({ ...dataSurvey, busca: true })
    };

    const handleStatusMessage = () => {
        if (statusMessage) {
            return <p id="status-message">Medicamento não encontrado!</p>
        }
    }

    return (
        <form id='form-container' onSubmit={handleSubmit}>
            {props.form.map((field, index) => (
                <div key={index}>
                    <label htmlFor={field.name}>{field.label}</label>
                    <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        onChange={handleInputChange}
                    />
                </div>
            ))}
            {props.form.length === 0 && 'Erro NIC-0100: Dados dos Input não reconhecidos.'}
            <button type='submit'>Buscar</button>
            {statusMessage ? handleStatusMessage() : null }
        </form>
    );
};

export default Form;