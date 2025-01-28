import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import CarWidget from '../CarWidget/CarWidget' 

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <h1>FC Remeras Importadas</h1>
      </Link>
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