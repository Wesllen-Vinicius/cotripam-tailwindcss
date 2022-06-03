import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages'
import FourZeroFour from '../pages/404'
import { DashBoardEncarregado } from '../pages/dashboard'
import { Login } from '../pages/login'
import { PerfilEncarregado } from '../pages/perfil'


const Rotas: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="encarregados" element={<DashBoardEncarregado />}/>
      <Route path="/*" element={<FourZeroFour />} />
    </Routes>
  )
}
export default Rotas
