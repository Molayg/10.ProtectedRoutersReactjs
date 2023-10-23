import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Inicio from "./components/pages/Inicio/Inicio.jsx";
import Reserva from "./components/pages/Reserva/Reserva.jsx";
import Servicios from "./components/pages/Servicios/Servicios.jsx";
import Tienda from "./components/pages/Tienda/Tienda.jsx";
import NotFound from "./components/pages/NotFoud/NotFound.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Inicio />} />
          <Route path="/reserva" element={<Reserva />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
