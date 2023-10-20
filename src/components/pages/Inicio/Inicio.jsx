import React from "react";
import portada from "../../../assets/portada.png";
import "./Inicio.css";
const Inicio = () => {
  return (
    <main className="portadacontainer">
      <img className="portada" src={portada} />
    </main>
  );
};
export default Inicio;
