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

export const ConsultaEstoque = () => {

  const { dataSurvey, setDataSurvey, setStatusMessage } = useContext(SearchContext)

  const form = [
    {
      label: "Código Medicamento:",
      type: "text",
      name: "codigo_medicamento",
    }
  ];

  return (
    <Container>
      <Header nomeAba="Consulta Estoque" />
      <Section>
        <Form form={form} />
        <Table apiUrl="http://localhost:3001/medicamentos/consultar_estoque/" />
        <NavigationBar>
          <NavigationButton href='/consulta_medicamento' func={() => { setStatusMessage(false); setDataSurvey({ ...dataSurvey, busca: false }) }} >Consultar um Medicamentos</NavigationButton>
          <NavigationButton href='/consulta_estoque_unidades' >Consultar nas Unidades Próximas</NavigationButton>
        </NavigationBar>
      </Section>
    </Container>
  )
}
