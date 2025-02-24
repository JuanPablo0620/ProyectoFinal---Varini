import React from 'react'
import {useContext} from "react";
import CarritoContext from '../../context/CarritoContext';


const CarItem = ({ item, cantidad, img }) => {
  const { eliminarProductos } = useContext(CarritoContext);

  return (
    <>
 <div className="bg-gray-800 w-72 border-2 py-6 px-4 rounded-lg mb-6 shadow-lg flex flex-col items-center">
      <img src={img} alt={item.nombre} className="w-32 h-32 object-cover mb-2" />
      <h4 className="text-white text-lg font-bold">{item.nombre}</h4>
      <p className="text-white text-lg font-bold">Cantidad: {cantidad}</p>
      <p className="text-white text-lg font-bold">Precio: {item.precio}</p>
      <button className='mt-2 bg-red-600 hover:bg-red-800 py-1 px-1 text-white rounded-lg' onClick={() => eliminarProductos(item.id)}>Eliminar</button>
    </div>
    </>
  );
};

export default CarItem;