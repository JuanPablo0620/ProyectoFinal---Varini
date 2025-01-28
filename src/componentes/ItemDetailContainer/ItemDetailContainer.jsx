import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getUnProducto } from '../../asyncmock';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { id } = useParams(); // Obtener el id de la URL

  useEffect(() => {
    getUnProducto(id)
      .then(respuesta => setProducto(respuesta))
      .catch(error => console.log(error));
  }, [id]); // Ejecutar el efecto cuando id cambie

  return (
    <div>
      {producto ? <ItemDetail {...producto} /> : <p>Cargando...</p>}
    </div>
  );
};

export default ItemDetailContainer;