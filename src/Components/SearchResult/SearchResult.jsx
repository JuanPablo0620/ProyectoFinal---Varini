import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductos } from '../../asyncmock';
import ItemList from '../ItemList/ItemList';

const SearchResult = () => {
  const [productos, setProductos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    getProductos()
      .then(respuesta => {
        const resultados = respuesta.filter(producto =>
          producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setProductos(resultados);
      })
      .catch(error => console.log(error));
  }, [searchTerm]);

  return (
    <div>
      <h2>Resultados de búsqueda para "{searchTerm}"</h2>
      <ItemList productos={productos} />
    </div>
  );
};

export default SearchResult;