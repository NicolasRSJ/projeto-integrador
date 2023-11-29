import { Route, Routes } from "react-router-dom";

import Home from "../Views/Home";
import { ConsultaMedicamento } from "../Views/Consulta_Medicamento";
import { ConsultaEstoque } from "../Views/Consulta_Estoque";
import { ConsultaEstoqueUnidades } from "../Views/Consulta_Estoque_Unidades";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/consulta_medicamentos" element={<ConsultaMedicamento />} />
      <Route path="/consulta_estoque" element={<ConsultaEstoque />} />
      <Route path="/consulta_estoque_unidades" element={<ConsultaEstoqueUnidades />} />
    </Routes>
  );
};
