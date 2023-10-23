import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { Outlet } from "react-router-dom";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from "./components/pages/Inicio/Inicio";
import Reserva from "./components/pages/Reserva/Reserva";
import Servicios from "./components/pages/Servicios/Servicios";
import Tienda from "./components/pages/Tienda/Tienda";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
