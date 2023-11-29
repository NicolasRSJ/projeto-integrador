import React, { useState, useContext, useEffect } from 'react';
import '../Style/Components/Form.css';
import { SearchContext } from '../Context/index'; // Certifique-se de importar o contexto correto


const Form = (props) => {
    const { dataSurvey, setDataSurvey } = useContext(SearchContext);
    const [formValues, setFormValues] = useState(dataSurvey);

    useEffect(() => {
        setDataSurvey(formValues);
    }, [setDataSurvey, formValues]);

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
        console.log(dataSurvey)
    };

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
            <button type='submit' onClick={(e) => { e.preventDefault(); setDataSurvey({...dataSurvey, busca: true})}}>Buscar</button>
        </form>
    );
};

export default Form;