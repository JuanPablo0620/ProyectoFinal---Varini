import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { id } = useParams(); // Obtener el id de la URL

  useEffect(() => {
    const db = getFirestore();
    const productoRef = doc(db, 'productos', id);

    getDoc(productoRef)
      .then((doc) => {
        if (doc.exists()) {
          setProducto({ id: doc.id, ...doc.data() });
        } else {
          console.log('No such document!');
        }
      })
      .catch((error) => {
        console.log('Error getting document:', error);
      });
  }, [id]);

  return (
    <div>
      {producto ? <ItemDetail {...producto} /> : <p>Cargando...</p>}
    </div>
  );
};

export default ItemDetailContainer;