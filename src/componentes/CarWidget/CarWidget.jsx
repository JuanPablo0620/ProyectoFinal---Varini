import React from 'react'
import './CarWidget.css'
import imgCarrito from './carro-de-la-compra.png'


const CarWidget = () => {

    

  return (
    <div className='divCarrito'>
        <img className='imgCarrito' src={imgCarrito} alt="carrito" />
    </div>
  )
}

export default CarWidget