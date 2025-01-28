import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='articulo'>
        <img src={img} className='articulo-img'/>
        <h3>{nombre}</h3>
        <span>${precio}</span>
        <button><Link  to={`/item/${id}`}> Ver detalles </Link></button>
    </div>
      
  ) 
}

export default Item