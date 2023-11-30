import React, { useState, createContext } from 'react';

export const SearchContext = createContext()

export const SearchProvider = ({ children }) => {
    const [dataSurvey, setDataSurvey] = useState({
        codigo_medicamento: undefined,
        id_unidade_atual: 1,
        quant_desejada: 1,
        busca: false
    })

    const [statusMessage, setStatusMessage] = useState(false);

    return (
        <SearchContext.Provider value={{ dataSurvey, setDataSurvey, statusMessage, setStatusMessage }}>
            {children}
        </SearchContext.Provider>

    )
}