import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="headercontainer">
      <img className="logo" src={logo} alt="Logo" />
      <h1>JIMMY´S BARBERSHOP</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className="iniciolink">
              INICIO
            </NavLink>
          </li>
          <li>
            <NavLink to="/reserva" className="reservalink">
              RESERVA DE CITAS
            </NavLink>
          </li>
          <li>
            <NavLink to="/servicios" className="servicioslink">
              SERVICIOS
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
