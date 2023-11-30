import React from 'react'
import Container from '../Components/Container'
import Header from '../Components/Header'
import Section from '../Components/Section'
import Form from '../Components/Form'
import Table from '../Components/Table'
import NavigationBar from '../Components/NavigationBar'
import NavigationButton from '../Components/NavigationButton'

export const ConsultaMedicamento = () => {

  const form = [
    {
      label: "Código Medicamento:",
      type: "text",
      name: "codigo_medicamento",
    },
  ];

  return (
    <Container>
      <Header nomeAba="Consulta Medicamentos" />
      <Section>
        <Form form={form} />
        <Table apiUrl="http://localhost:3001/medicamentos/consultar/" />
        <NavigationBar>
          <NavigationButton href='/consulta_estoque' >Consultar no Estoque</NavigationButton>
          <NavigationButton href='/consulta_estoque_unidades' >Consultar nas Unidades</NavigationButton>
        </NavigationBar>
      </Section>
    </Container>
  )
}
