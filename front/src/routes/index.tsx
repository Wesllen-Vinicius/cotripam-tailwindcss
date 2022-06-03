import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages";
import FourZeroFour from "../pages/404";
import Login from "../pages/login";

const Rotas: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<FourZeroFour />} />
    </Routes>
  );
};
export default Rotas;