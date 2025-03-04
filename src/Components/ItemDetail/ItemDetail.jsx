import React, { useState, useContext } from 'react';
import CarritoContext from '../../context/CarritoContext.jsx';
import { Link } from 'react-router-dom';
import Contador from '../Contador/Contador.jsx';

const ItemDetail = ({ id, nombre, precio, img, descripcion, stock }) => {
  const { agregarAlCarrito } = useContext(CarritoContext);

  // Creamos un estado local con la cantidad de productos agregados.
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  // Creamos una función manejadora de la cantidad:
  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = { id, nombre, precio };
    agregarAlCarrito(item, cantidad);
  };

  return (
    <div className="fondo">
      <div className="contenedor flex flex-col justify-center items-center p-10">
        <div className="imagen">
          <img className="w-50" src={img} alt={nombre} />
        </div>
        <div className="info flex flex-col">
          <h2 className="text-base mb-2.5">{nombre}</h2>
          <h3 className="font-poppins">Precio: ${precio}</h3>
          <p className="font-poppins text-l mb-5 mt-3">{descripcion}</p>

          <div className="flex flex-col justify-center items-center">
            {agregarCantidad > 0 ? (
              <Link className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300" to="/cart">
                Terminar Compra
              </Link>
            ) : (
              <Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
