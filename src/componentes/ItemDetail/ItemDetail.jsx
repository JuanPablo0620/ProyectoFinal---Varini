import React from 'react';
import './ItemDetail.css'

const ItemDetail = ({ id, nombre, precio, img }) => {
  return (
<div className="producto">
    <h2>{nombre}</h2>
    <h3>Precio: ${precio}</h3>
    <h3>ID: {id}</h3>
    <img src={img} alt={nombre} />
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut quam quia laborum iste est saepe optio, deserunt, distinctio dicta voluptas natus impedit provident necessitatibus sunt excepturi officia repudiandae sapiente labore!</p>
</div>
  );
};

export default ItemDetail;