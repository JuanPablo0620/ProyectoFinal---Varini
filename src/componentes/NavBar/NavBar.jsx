import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import CarWidget from '../CarWidget/CarWidget';
import logo from './imagenes/logo.png'; // Asegúrate de que la ruta sea correcta

const NavBar = () => {
  return (
    <header>
      <div className="contenedorNav">
        <Link className='tituloLink' to="/">
          <div className="logo-titulo">
            <img src={logo} alt="logo" className="logo" />
            <h1 className="titulo">FC Remeras Importadas</h1>
          </div>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/categoria/PremierLeague">Premier League</Link>
          </li>
          <li>
            <Link to="/categoria/LaLiga">La Liga</Link>
          </li>
          <li>
            <Link to="/categoria/SerieA">Serie A</Link>
          </li>
          <li>
            <Link to="/categoria/Bundesliga">Bundesliga</Link>
          </li>
          <li>
            <Link to="/categoria/Selecciones">Selecciones</Link>
          </li>
        </ul>
      </nav>
      <CarWidget />
    </header>
  );
};

export default NavBar;