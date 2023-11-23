import React from 'react'
import Container from '../Components/Container'
import Header from '../Components/Header'
import Section from '../Components/Section'
import Form from '../Components/Form'
import Table from '../Components/Table'
import MetodoGet from '../Connection/Get'
import { useState } from 'react'

export const ConsultaMedicamento = () => {

  const [dados, setDados] = useState()

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
        <Table medicamentos={dados} />
      </Section>
    </Container>
  )
}
