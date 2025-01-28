import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'


const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='articulo'>
      <div className='container'>
      <h3>{nombre}</h3>
        <img src={img} className='articulo-img'/>
        <span>${precio}</span>
        <button><Link  to={`/item/${id}`}> Ver producto </Link></button>
      </div>
    </div>
      
  ) 
}

export default Item