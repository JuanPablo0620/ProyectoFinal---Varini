import React from 'react'
import "./NavBar.css"
import CarWidget from '../CarWidget/CarWidget'  

const navbar = () => {

  return (
    <header>
      <h1>FC Remeras Importadas</h1>
      <nav>
        <ul>
          <li><a href="">Premier league</a></li>
          <li><a href="">La Liga</a></li>
          <li><a href="">Serie A</a></li>
          <li><a href="">Bundesliga</a></li>
          <li><a href="">Selecciones</a></li>
        </ul>
      </nav>
      <CarWidget/>
    </header>
  );
}

export default navbar