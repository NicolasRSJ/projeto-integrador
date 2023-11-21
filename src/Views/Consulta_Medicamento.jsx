import React from 'react'
import Container from '../Components/Container'
import Header from '../Components/Header'
import Section from '../Components/Section'
import Form from '../Components/Form'
import Table from '../Components/Table'

export const ConsultaMedicamento = () => {
  
  const formFields = [
    {
      label: "Código Remédio:",
      type: "text",
      name: "codigo",
    },
  ];
  
  return (
    <Container>
      <Header nomeAba="Consulta Medicamentos" />
      <Section>
        <Form formFilds={formFields} />
        <Table/>
      </Section>
    </Container>
  )
}
