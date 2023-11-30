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

  const { dataSurvey, setDataSurvey, setStatusMessage } = useContext(SearchContext)

  const form = [
    {
      label: "Código Medicamento:",
      type: "text",
      name: "codigo_medicamento",
    },
    {
      label: "Código da Unidade:",
      type: "text",
      name: "id_unidade_atual",
    },
  ];

  return (
    <Container>
      <Header nomeAba="Consulta Estoque Unidades" />
      <Section>
        <Form form={form} />
        <Table apiUrl="http://localhost:3001/medicamentos/outras_unidades/" />
        <NavigationBar>
          <NavigationButton href='/consulta_estoque' func={() => { setStatusMessage(false); setDataSurvey({ ...dataSurvey, busca: false }); }} >Consultar Estoque</NavigationButton>
          <NavigationButton href='/consulta_medicamento' func={() => { setStatusMessage(false); setDataSurvey({ ...dataSurvey, busca: false }); }} >Consultar um Medicamentos</NavigationButton>
        </NavigationBar>
      </Section>
    </Container>
  )
}
