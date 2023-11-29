import React from 'react'
import Container from '../Components/Container'
import Header from '../Components/Header'
import Section from '../Components/Section'
import Form from '../Components/Form'
import Table from '../Components/Table'
import NavigationBar from '../Components/NavigationBar'
import NavigationButton from '../Components/NavigationButton'

export const ConsultaEstoque = () => {

  const form = [
    {
      label: "Código Remédio:",
      type: "text",
      name: "codigo_medicamento",
    },
    {
      label: "Código da Unidade:",
      type: "text",
      name: "id_unidade_atual",
    },
    {
      label: "Quantidade:",
      type: "text",
      name: "quant_desejada",
    },
  ];

  return (
    <Container>
      <Header nomeAba="Consulta Estoque"/>
      <Section>
        <Form form={form} />
        <Table apiUrl="https://pokeapi.co/api/v2/pokemon/"/>
        <NavigationBar>
          <NavigationButton href='/consulta_medicamentos'>Consultar Medicamentos</NavigationButton>
          <NavigationButton href='/consulta_estoque_unidades'>Estoque das Unidades</NavigationButton>
        </NavigationBar>
      </Section>
    </Container>
  )
}
