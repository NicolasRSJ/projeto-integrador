import React from 'react'
import Container from '../Components/Container'
import Header from '../Components/Header'
import Section from '../Components/Section'
import Form from '../Components/Form'
import Table from '../Components/Table'
import NavigationBar from '../Components/NavigationBar'
import NavigationButton from '../Components/NavigationButton'
import { useContext } from 'react'
import { SearchContext } from '../Context'

export const ConsultaEstoqueUnidades = () => {

  const { dataSurvey, setDataSurvey } = useContext(SearchContext)

  const form = [
    {
      label: "Código Remédio:",
      type: "text",
      name: "codigo_medicamento",
    },
  ];

  return (
    <Container>
      <Header nomeAba="Consulta Estoque Unidades" />
      <Section>
        <Form form={form} />
        <Table apiUrl="http://localhost:3001/medicamentos/outras_unidades/" />
        <NavigationBar>
          <NavigationButton href='/consulta_estoque'>Consultar Estoque</NavigationButton>
          <NavigationButton href='/consulta_medicamentos' func={ () => setDataSurvey({...dataSurvey, busca: false}) }>Consultar Medicamentos</NavigationButton>
        </NavigationBar>
      </Section>
    </Container>
  )
}
