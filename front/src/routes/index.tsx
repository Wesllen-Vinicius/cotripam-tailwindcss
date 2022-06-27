import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages'
import FourZeroFour from '../pages/404'
import { Login } from '../pages/login'
import { DashBoardEncarregado } from '../pages/modules/Filial/dashboardEncarregado'
import { DashBoardGerencia } from '../pages/modules/Gerencia/DashboardGerencia'
import { DashBoardSede } from '../pages/modules/Cede/dashboardSede'

const Rotas: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="encarregado" element={<DashBoardEncarregado />} />
      <Route path="gerencia" element={<DashBoardGerencia />} />
      <Route path="sede" element={<DashBoardSede />} />
      <Route path="/*" element={<FourZeroFour />} />
    </Routes>
  )
}
export default Rotas
