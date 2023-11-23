import { useState, useEffect } from 'react';
import axios from 'axios';

const MetodoGet = (apiURL, params) => {
    const [dados, setDados] = useState([]);

    useEffect(() => {
        axios.get(apiURL)
          .then(response => {
                setDados(response.data.results);
            })
          .catch(error => {
                console.error(error);
            });
    }, [apiURL, params]);

    console.log(dados)

    return JSON.stringify(dados);
}

export default MetodoGet;
