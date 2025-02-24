import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({id, nombre, precio, img}) => {
  return (
    <div className="articulo bg-gray-800 w-full sm:w-72 border-2 py-6 px-4 rounded-lg mb-6 shadow-lg">
      <div className="flex flex-col items-center">
        <h3 className="text-white text-lg font-bold mb-4 text-center">
          {nombre}
        </h3>
        <img
          src={img}
          alt={nombre}
          className="articulo-img w-full sm:w-60 h-60 object-cover mb-4 rounded-lg transition-transform duration-300 hover:scale-110"
        />
        <span className="text-white text-xl font-semibold mb-4">${precio}</span>
        <Link
          to={`/item/${id}`}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Ver producto
        </Link>
      </div>
    </div>
  ); 
}

export default Item