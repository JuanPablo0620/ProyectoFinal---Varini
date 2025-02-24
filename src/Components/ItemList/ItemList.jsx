import React from 'react';
/* import './ItemList.css'; */
import Item from '../Item/Item';

const ItemList = ({ productos }) => {
  return (
    <div className="contenedorProductos grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto max-w-screen-xl py-4 px-4 flex-wrap">
      {productos.map((producto) => (
        <Item key={producto.id} {...producto} />
      ))}
    </div>
  );
};

export default ItemList;