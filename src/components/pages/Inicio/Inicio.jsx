import React from "react";
import portada from "../../../assets/portada.png";
import "./Inicio.css";
const Inicio = () => {
  return (
    <main className="portadacontainer">
      <h1>JIMMY´S BARBERSHOP</h1>
      <img className="portada" src={portada} />
    </main>
  );
};
export default Inicio;
