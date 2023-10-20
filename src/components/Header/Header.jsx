import React from "react";
import "./Header.css";
import logo from "./assets/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Logo" />
      <h1>Mi aplicación React</h1>
   <nav>
        <ul>
          <li>
          <NavLink to="/" className="iniciolink">Inicio</NavLink>
          </li>
          <li>
          <NavLink to="/reserva" className="reservalink">Reserva</NavLink>
          </li>
          <li>
          <NavLink to="/servicios" className="servicioslink">Servicios</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;




           




