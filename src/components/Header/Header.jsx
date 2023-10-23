import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="headercontainer">
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
        </ul>
      </nav>

      <img className="logo" src={logo} alt="Logo" />
      <nav>
        <ul>
          <li>
            <NavLink to="/servicios" className="servicioslink">
              SERVICIOS
            </NavLink>
          </li>
          <li>
            <NavLink to="/tienda" className="tiendalink">
              TIENDA
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
<div class="navbar">
  <div class="nav-item">Elemento 1</div>
  <div class="nav-item">Elemento 2</div>
  <div class="nav-logo">Logo</div>
  <div class="nav-item">Elemento 3</div>
  <div class="nav-item">Elemento 4</div>
</div>