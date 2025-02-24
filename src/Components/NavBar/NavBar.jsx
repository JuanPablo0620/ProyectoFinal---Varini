import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CarWidget from '../CarWidget/CarWidget';
import logo from './imagenes/logo.png';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Cerrar el menú al hacer clic fuera del menú
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('nav')) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <img src={logo} alt="logo" className="w-30 mr-2" />
        </Link>

        {/* Overlay para cerrar el menú */}
        {menuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={closeMenu}></div>
        )}

        {/* Menú de navegación */}
        <nav className={`fixed top-0 left-0 w-64 h-full transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50 md:relative md:translate-x-0 md:w-auto md:h-auto md:flex md:items-center md:justify-center`}>
          <ul className="flex flex-col md:flex-row items-center mt-20 md:mt-0">
            <li className="my-2 md:my-0 md:mx-4">
              <Link className="text-white py-2 px-4 rounded transition-colors duration-300 ease-in-out hover:bg-white/10 hover:text-[#ffcc00] whitespace-nowrap" to="/categoria/Premierleague" onClick={closeMenu}>Premier League</Link>
            </li>
            <li className="my-2 md:my-0 md:mx-4">
              <Link className="text-white py-2 px-4 rounded transition-colors duration-300 ease-in-out hover:bg-white/10 hover:text-[#ffcc00] whitespace-nowrap" to="/categoria/Laliga" onClick={closeMenu}>La Liga</Link>
            </li> 
            <li className="my-2 md:my-0 md:mx-4">
              <Link className="text-white py-2 px-4 rounded transition-colors duration-300 ease-in-out hover:bg-white/10 hover:text-[#ffcc00] whitespace-nowrap" to="/categoria/Seriea" onClick={closeMenu}>Serie A</Link>
            </li>
            <li className="my-2 md:my-0 md:mx-4">
              <Link className="text-white py-2 px-4 rounded transition-colors duration-300 ease-in-out hover:bg-white/10 hover:text-[#ffcc00] whitespace-nowrap" to="/categoria/Bundesliga" onClick={closeMenu}>Bundesliga</Link>
            </li>
            <li className="my-2 md:my-0 md:mx-4">
              <Link className="text-white py-2 px-4 rounded transition-colors duration-300 ease-in-out hover:bg-white/10 hover:text-[#ffcc00] whitespace-nowrap" to="/categoria/Selecciones" onClick={closeMenu}>Selecciones</Link>
            </li>
          </ul>
        </nav>

        {/* Carrito de compras */}
        <CarWidget className="hidden md:block" />

                {/* Botón del menú móvil */}
                <button className="block md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

      </div>
      
    </header>
  );
};

export default NavBar;