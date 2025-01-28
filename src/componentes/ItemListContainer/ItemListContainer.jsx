import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCategoria, getProductos } from '../../asyncmock';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    if (categoria) {
      getCategoria(categoria)
        .then(respuesta => setProductos(respuesta))
        .catch(error => console.log(error));
    } else {
      getProductos()
        .then(respuesta => setProductos(respuesta))
        .catch(error => console.log(error));
    }
  }, [categoria]);

  return (
    <>
      <div className='container'>
        <h2>
          {categoria ? `Productos de ${categoria}` : "Todos los productos"}
        </h2>
      </div>
      <div className="">
        <ItemList productos={productos} />
      </div>
    </>
  );
};

export default ItemListContainer;