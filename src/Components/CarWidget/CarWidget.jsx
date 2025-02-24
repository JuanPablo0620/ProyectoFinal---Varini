import React from 'react'
import './CarWidget.css'
import imgCarrito from './carro-de-la-compra.png'
import CarritoContext from '../../context/CarritoContext'
import {useContext} from 'react'
import {Link} from 'react-router-dom'
const CarWidget = () => {

  const {cantidadTotal} = useContext(CarritoContext)

  return (
    
      <Link to="/cart" className="link-contador">
        <div className="carritoImg">
          <img className="imgCarrito" src={imgCarrito} alt="carrito" />
        </div>
        <div className="contador">
          {cantidadTotal > 0 && <strong>{cantidadTotal}</strong>}
        </div>
      </Link>
  );
}

export default CarWidget